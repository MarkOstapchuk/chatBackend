import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer
} from '@nestjs/websockets'
import { MessageService } from './message.service'
import { IMessageDto } from './message.dto'
import { Server, Socket } from 'socket.io'
import { $Enums } from '../../prisma/generated/client'
import Status = $Enums.Status
import Type = $Enums.Type

@WebSocketGateway({
  cors: {
    origin: '*' // можно указать `*` для отключения `CORS`
  },
  serveClient: false,
  // название пространства может быть любым, но должно учитываться на клиенте
  namespace: 'chat'
})
export class MessageGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messageService: MessageService) {}

  private readonly connectedClients: Map<
    number,
    { socket: string; dialog: number | null }
  > = new Map()
  @WebSocketServer() server: Server

  handleConnection(client: Socket) {
    console.log(`${client.id} joined`)
  }

  @SubscribeMessage('user:connect')
  async connect(client: Socket, userId: number) {
    const obj = this.connectedClients.get(userId)
    if (!obj) {
      this.connectedClients.set(userId, { socket: client.id, dialog: null })
      await this.messageService.makeOnline(userId)
      console.log(this.connectedClients)
    }
  }

  @SubscribeMessage('user:disconnect')
  async disconnect(client: Socket, userId: number) {
    this.connectedClients.delete(userId)
    await this.messageService.makeOffline(userId)
    console.log('leaved ', userId, this.connectedClients)
  }

  handleDisconnect(client: Socket) {
    console.log(`${client.id} leaved`)
  }

  @SubscribeMessage('messages:get')
  async handleMessagesGet(
    @MessageBody() payload: { chatId: number; userId: number }
  ): Promise<void> {
    const messages = await this.messageService.getMessages(payload.chatId)
    this.server
      .to(this.connectedClients.get(payload.userId).socket)
      .emit('messages', messages)
  }

  @SubscribeMessage('dialog:join')
  async handleDialogJoin(
    @MessageBody() payload: { chatId: number; userId: number }
  ): Promise<void> {
    const obj = this.connectedClients.get(payload.userId)
    if (obj) {
      this.connectedClients.set(payload.userId, {
        ...obj,
        dialog: payload.chatId
      })
      console.log('dialog joined', this.connectedClients)
    } else {
      console.log('user not found')
    }
  }

  @SubscribeMessage('dialog:leave')
  async handleDialogLeave(
    @MessageBody() payload: { chatId: number; userId: number }
  ): Promise<void> {
    const obj = this.connectedClients.get(payload.userId)
    if (obj) {
      this.connectedClients.set(payload.userId, {
        ...obj,
        dialog: null
      })
      console.log('dialog leaved', this.connectedClients)
    }
  }

  async notify(
    createdMessage: {
      id: number
      text: string
      createdAt: Date
      senderId: number
      dialogId: number
      unreadById: number[]
      status: Status
      type: Type
    },
    payload: {
      message: IMessageDto
      usersId: number[]
    }
  ) {
    for (const item of payload.usersId) {
      if (this.connectedClients.get(item)) {
        if (
          this.connectedClients.get(item).dialog === createdMessage.dialogId
        ) {
          await this.handleMessagesGet({
            chatId: payload.message.dialogId,
            userId: item
          })
          console.log(`message ${createdMessage.text} sent to user ${item}`)
        } else {
          this.server
            .to(this.connectedClients.get(item).socket)
            .emit('dialog:notification', createdMessage)
          await this.messageService.makeUnreadMessage(
            createdMessage.id,
            item,
            createdMessage.dialogId
          )
          console.log(
            `message ${createdMessage.text} sent to user ${item} but to another dialog`
          )
        }
      } else {
        await this.messageService.makeUnreadMessage(
          createdMessage.id,
          item,
          createdMessage.dialogId
        )
        console.log(`user ${item} is not online and couldn't receive a message`)
        console.log('so we need to set his messages to unread')
      }
    }
  }

  @SubscribeMessage('message:post')
  async handleMessagePost(
    @MessageBody()
    payload: // { userId: string, userName: string, text: string }
    {
      message: IMessageDto
      usersId: number[]
    }
  ): Promise<void> {
    const createdMessage = await this.messageService.createMessage(
      payload.message
    )
    await this.notify(createdMessage, payload)
  }

  @SubscribeMessage('messages:readall')
  async handleMessagesReadAll(
    @MessageBody()
    payload: {
      dialogId: number
      userId: number
    }
  ): Promise<void> {
    await this.messageService.makeReadMessages(payload.dialogId, payload.userId)
    console.log('read messages')
  }

  @SubscribeMessage('message:delete')
  async handleMessageDelete(
    @MessageBody()
    payload: {
      messageId: number
      dialogId: number
      usersId: number[]
    }
  ): Promise<void> {
    await this.messageService.deleteMessage(payload.messageId)
    for (const item of payload.usersId) {
      if (this.connectedClients.get(item)) {
        if (this.connectedClients.get(item).dialog !== null) {
          await this.handleMessagesGet({
            chatId: payload.dialogId,
            userId: item
          })
        }
      }
    }
  }

  //--------------------------------ЗАГРУЗКА ФАЙЛОВ-----------------------------

  @SubscribeMessage('messages:uploadImage')
  async handleUploadImage(
    @MessageBody()
    payload: {
      message: IMessageDto
      usersId: number[]
    }
  ): Promise<void> {
    const createdMessage = await this.messageService.createMessageImage(
      payload.message
    )
    await this.notify(createdMessage, payload)
  }

  @SubscribeMessage('messages:uploadFile')
  async handleUploadFile(
    @MessageBody()
    payload: {
      message: IMessageDto
      usersId: number[]
    }
  ): Promise<void> {
    const createdMessage = await this.messageService.createMessageFile(
      payload.message
    )
    await this.notify(createdMessage, payload)
  }
}

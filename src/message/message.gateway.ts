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
    this.connectedClients.set(userId, { socket: client.id, dialog: null })
    console.log(this.connectedClients)
  }

  @SubscribeMessage('user:disconnect')
  async disconnect(client: Socket, userId: number) {
    this.connectedClients.delete(userId)
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

  // удаление всех сообщений

  // создание сообщения
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
    for (const item of payload.usersId) {
      if (this.connectedClients.get(item)) {
        if (this.connectedClients.get(item).dialog === null) {
          await this.handleMessagesGet({
            chatId: payload.message.dialogId,
            userId: item
          })
          console.log(
            `message ${createdMessage.message.text} sent to user ${item}`
          )
        } else {
          console.log(
            `message ${createdMessage.message.text} sent to user ${item} but to another dialog`
          )
        }
      } else {
        await this.messageService.updateReadMessage(payload.message.id, false)
        console.log(`user ${item} is not online and couldn't receive a message`)
        console.log('so we need to set his messages to unread')
      }
    }
  }

  @SubscribeMessage('messages:readall')
  async handleMessagesReadAll(
    @MessageBody()
    payload: {
      chatId: number
    }
  ): Promise<void> {
    await this.messageService.readAllMessages(payload.chatId)
  }

  // обновление сообщения
  @SubscribeMessage('message:put')
  async handleMessagePut(
    @MessageBody()
    payload: IMessageDto
  ): Promise<void> {
    const updatedMessage = await this.messageService.updateMessage(payload)
    this.server.emit('message:put', updatedMessage)
    //this.handleMessagesGet({ chatId: payload.dialogId })
  }

  @SubscribeMessage('messages:clear')
  async handleMessagesClear(): Promise<void> {
    await this.messageService.clearMessages()
  }

  // удаление сообщения
  @SubscribeMessage('message:delete')
  async handleMessageDelete(
    @MessageBody()
    payload: number
  ) {
    const removedMessage = await this.messageService.removeMessage(payload)
    this.server.emit('message:delete', removedMessage)
    //this.handleMessagesGet({ chatId: payload.dialogId })
  }
}

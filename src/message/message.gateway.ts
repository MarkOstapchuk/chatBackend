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

  private readonly connectedClients: Map<number, string> = new Map()
  @WebSocketServer() server: Server

  handleConnection(client: Socket) {
    console.log(`${client.id} joined`)
  }

  @SubscribeMessage('user:connect')
  async connect(client: Socket, userId: number) {
    this.connectedClients.set(userId, client.id)
    console.log(this.connectedClients)
  }

  @SubscribeMessage('chat:join')
  async joinChat(client: Socket, chatId: number) {
    client.join(chatId.toString())
    console.log(`${client.id} joined room ${chatId}`)
  }

  @SubscribeMessage('chat:leave')
  async leaveChat(client: Socket, chatId: number) {
    client.leave(chatId.toString())
    console.log(`${client.id} leaved room ${chatId}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`${client.id} leaved`)
  }

  @SubscribeMessage('messages:get')
  async handleMessagesGet(
    @MessageBody() payload: { chatId: number }
  ): Promise<void> {
    const messages = await this.messageService.getMessages(payload.chatId)
    this.server.to(payload.chatId.toString()).emit('messages', messages)
  }

  // удаление всех сообщений
  @SubscribeMessage('messages:clear')
  async handleMessagesClear(): Promise<void> {
    await this.messageService.clearMessages()
  }

  // создание сообщения
  @SubscribeMessage('message:post')
  async handleMessagePost(
    @MessageBody()
    payload: // { userId: string, userName: string, text: string }
    IMessageDto
  ): Promise<void> {
    const createdMessage = await this.messageService.createMessage(payload)

    // можно сообщать клиентам о каждой операции по отдельности
    this.server.emit('message:post', createdMessage.message)
    // console.log(this.connectedClients.get(createdMessage.users[0].id))
    // this.server
    //   .to(this.connectedClients.get(createdMessage.users[0].id))
    //   .emit('dialog:message', createdMessage)
    // но мы пойдем более простым путем
    await this.handleMessagesGet({ chatId: payload.dialogId })
  }

  // обновление сообщения
  @SubscribeMessage('message:put')
  async handleMessagePut(
    @MessageBody()
    payload: // { id: number, text: string }
    IMessageDto
  ): Promise<void> {
    const updatedMessage = await this.messageService.updateMessage(payload)
    this.server.emit('message:put', updatedMessage)
    //this.handleMessagesGet({ chatId: payload.dialogId })
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

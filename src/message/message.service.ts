import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { IMessageDto } from './message.dto'

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessages(chatId: number) {
    return this.prisma.message.findMany({
      where: { dialogId: +chatId },
      include: { sender: true, Dialog: { include: { users_id: true } } }
    })
  }

  async getMessageById(id: number) {
    return this.prisma.message.findUnique({ where: { id } })
  }

  // удаление всех сообщений - для отладки в процессе разработки
  async clearMessages() {
    return this.prisma.message.deleteMany()
  }

  async readAllMessages(chatId: number) {
    return this.prisma.message.updateMany({
      where: {
        dialogId: chatId
      },
      data: {
        isRead: true
      }
    })
  }

  async updateReadMessage(messageId: number, mode: boolean) {
    this.prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        isRead: mode
      }
    })
  }

  async createMessage(data: IMessageDto) {
    const dialog = await this.prisma.dialog.update({
      where: {
        id: data.dialogId
      },
      data: {
        lastMessage: data.text
      },
      include: {
        users_id: true
      }
    })
    const message = await this.prisma.message.create({ data })
    return { message, users: dialog.users_id }
  }

  // обновление сообщения
  async updateMessage(data: IMessageDto) {
    return this.prisma.message.update({
      where: { id: data.id },
      data: data
    })
  }

  // удаление сообщения
  async removeMessage(id: number) {
    return this.prisma.message.delete({ where: { id } })
  }
}

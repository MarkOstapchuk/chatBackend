import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateMessageDto } from './message.dto'
import { Status } from '../../prisma/generated/client'

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async createMessage(data: CreateMessageDto) {
    return this.prisma.message.create({
      data: {
        ...data,
        status: Status.SENT
      }
    })
  }

  async getMessages(dialogId: number) {
    return this.prisma.message.findMany({
      where: { dialogId: dialogId },
      include: {
        dialog: {
          include: {
            dialog_participants: true
          }
        }
      }
    })
  }

  async makeUnreadMessage(messageId: number, userId: number) {
    this.prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        unreadById: {
          push: userId
        }
      }
    })
  }

  async makeReadMessage(messageId: number) {
    this.prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        unreadById: {
          set: []
        }
      }
    })
  }
}

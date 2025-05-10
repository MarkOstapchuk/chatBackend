import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateMessageDto } from './message.dto'
import { Status, Type } from '../../prisma/generated/client'

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async makeOnline(userId: number) {
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        online: true
      }
    })
  }

  async makeOffline(userId: number) {
    const user = await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        online: false
      }
    })
    console.log(user)
  }

  async createMessage(data: CreateMessageDto) {
    await this.prisma.dialog.update({
      where: {
        id: data.dialogId
      },
      data: {
        lastMessage: data.text,
        sentTime: new Date()
      }
    })
    return this.prisma.message.create({
      data: {
        type: Type.TEXT,
        ...data,
        status: Status.SENT
      }
    })
  }

  async createMessageImage(data: CreateMessageDto) {
    await this.prisma.dialog.update({
      where: {
        id: data.dialogId
      },
      data: {
        lastMessage: 'SENT IMAGE',
        sentTime: new Date()
      }
    })
    return this.prisma.message.create({
      data: {
        ...data,
        type: Type.IMAGE,
        status: Status.SENT
      }
    })
  }

  async createMessageFile(data: CreateMessageDto) {
    await this.prisma.dialog.update({
      where: {
        id: data.dialogId
      },
      data: {
        lastMessage: 'SENT FILE',
        sentTime: new Date()
      }
    })
    return this.prisma.message.create({
      data: {
        ...data,
        type: Type.FILE,
        status: Status.SENT
      }
    })
  }

  async deleteMessage(messageId: number) {
    return this.prisma.message.delete({
      where: {
        id: messageId
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
      },
      orderBy: {
        id: 'asc'
      }
    })
  }

  async makeUnreadMessage(messageId: number, userId: number, dialogId: number) {
    await this.prisma.message.update({
      where: {
        id: messageId
      },
      data: {
        unreadById: {
          push: userId
        }
      }
    })
    await this.prisma.dialog_participant.update({
      where: {
        dialogId_userId: { dialogId, userId }
      },
      data: {
        notificationCount: {
          increment: 1
        }
      }
    })
  }

  async makeReadMessages(dialogId: number, userId: number) {
    await this.prisma.message.updateMany({
      where: {
        dialogId: dialogId
      },
      data: {
        unreadById: {
          set: []
        }
      }
    })
    await this.prisma.dialog_participant.update({
      where: {
        dialogId_userId: { dialogId, userId }
      },
      data: {
        notificationCount: 0
      }
    })
  }
}

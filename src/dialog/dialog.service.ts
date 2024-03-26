import { BadRequestException, Injectable } from '@nestjs/common'
import { DialogDto } from './dialog.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class DialogService {
  constructor(private prisma: PrismaService) {}

  async createDialog(dto: DialogDto, data: { userId: number; name: string }) {
    console.log(data)
    const ids = dto.users.map((item) => ({ id: item.userId }))
    const checkDialog = await this.prisma.dialog.findMany({
      where: {
        users_id: {
          every: {
            id: {
              // возможно при чате надо будет менять
              in: [...ids.map((item) => item.id), data.userId]
            }
          }
        }
      },
      include: {
        users_id: true
      }
    })

    if (checkDialog.length > 0) {
      throw new BadRequestException('Dialog already exists')
    }
    if (dto.users.length === 1) {
      const namedDialogs = [
        { userId: dto.users[0].userId, name: data.name },
        { userId: data.userId, name: dto.users[0].name }
      ]
      console.log([...dto.users, data])
      return this.prisma.dialog.create({
        data: {
          users_id: {
            connect: [...ids, { id: data.userId }]
          },
          named_dialogs: {
            createMany: {
              data: namedDialogs
            }
          }
        }
      })
    }
  }

  async getById(id: string, userId: number) {
    return this.prisma.dialog.findUnique({
      where: {
        id: +id
      },
      include: {
        messages: true,
        named_dialogs: {
          where: {
            userId: userId
          }
        },
        users_id: true
      }
    })
  }

  async getNamedById(id: string) {
    return this.prisma.named_dialog.findUnique({
      where: {
        id: +id
      },
      include: {
        dialog: true
      }
    })
  }

  async getAll() {
    return this.prisma.dialog.findMany({
      include: { users_id: true, named_dialogs: true }
    })
  }
}

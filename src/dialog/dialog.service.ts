import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class DialogService {
  constructor(private prisma: PrismaService) {}

  async createDialog(
    data: { userId: number; name: string; pictureUrl: string | undefined },
    user: { userId: number; name: string; pictureUrl: string | undefined }
  ) {
    const checkDialog = await this.prisma.dialog.findMany({
      where: {
        dialog_participants: {
          every: {
            userId: {
              in: [data.userId, user.userId]
            }
          }
        }
      }
    })
    // const tmpName = data[0].name
    // const tmpPicture = data[0].pictureUrl
    // data[0].name = data[1].name
    // data[0].pictureUrl = data[1].pictureUrl
    // data[1].name = tmpName
    // data[1].pictureUrl = tmpPicture
    if (checkDialog.length > 0) {
      throw new BadRequestException('Dialog already exists')
    }

    return this.prisma.dialog.create({
      data: {
        dialog_participants: {
          createMany: {
            data: [
              { userId: user.userId, userRefId: data.userId },
              { userId: data.userId, userRefId: user.userId }
            ]
          }
        }
      },
      include: {
        dialog_participants: true
      }
    })
  }

  async getById(dialogId: number) {
    return this.prisma.dialog.findUnique({
      where: {
        id: dialogId
      },
      include: {
        messages: true,
        dialog_participants: {
          include: {
            user: true,
            userRef: true
          }
        }
      }
    })
  }
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AuthDto } from '../auth/dto/auth.dto'
import { hash } from 'argon2'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      username: dto.username,
      password: await hash(dto.password)
    }
    return this.prisma.user.create({
      data: user
    })
  }

  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        dialog_participants_contains: {
          include: {
            dialog: true,
            userRef: true
          },
          orderBy: {
            dialog: {
              sentTime: 'asc'
            }
          }
        }
      }
    })
    // user.dialog_participant = user.dialog_participant.sort((a, b) => {
    //   return a.dialog.sentTime?.getTime() - b.dialog.sentTime?.getTime()
    // })
    if (!user) throw new NotFoundException(`User with id ${id} not found`)

    return user
  }

  async findUsers(username: string, id: number) {
    return this.prisma.user.findMany({
      where: {
        username: {
          contains: username
        },
        id: {
          not: id
        }
      },
      select: {
        id: true,
        name: true,
        username: true,
        pictureUrl: true
      }
    })
  }

  async findDialogs(username: string, id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        username: true,
        pictureUrl: true,
        dialog_participants_in: {
          where: {
            userRef: {
              name: {
                contains: username
              }
            }
          },
          include: {
            dialog: true,
            user: true
          }
        }
      }
    })
  }

  async update(id: number, dto: Partial<UserDto>) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: dto
    })
  }

  async getByUsernameOrEmail(username: string, email: string) {
    return this.prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    })
  }

  async getByUsernameAndEmail(username: string, email: string) {
    if (username) {
      return this.prisma.user.findUnique({
        where: { username }
      })
    }
    if (email) {
      return this.prisma.user.findUnique({
        where: { email }
      })
    }
    throw new NotFoundException('Email and username has not been provided')
  }

  async getAll() {
    return this.prisma.user.findMany()
  }

  async getAllOther(id: number) {
    return this.prisma.user.findMany({
      where: {
        NOT: {
          id
        }
      }
    })
  }
}

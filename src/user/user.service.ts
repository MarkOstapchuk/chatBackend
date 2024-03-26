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
        dialog_participant: {
          include: {
            dialog: true
          }
        }
      }
    })
    if (!user) throw new NotFoundException(`User with id ${id} not found`)

    return user
  }

  async findUsers(username: string) {
    const users = await this.prisma.user.findMany({
      where: {
        username: {
          contains: username
        }
      },
      select: {
        id: true,
        name: true,
        username: true,
        pictureUrl: true
      }
    })
    return users
  }

  async update(id: number, dto: UserDto) {
    let data = dto
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }
    return this.prisma.user.update({
      where: {
        id
      },
      data
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

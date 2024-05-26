import { Type } from '../../prisma/generated/client'

export class IMessageDto {
  id: number
  text: string
  senderId: number
  dialogId: number
}

export class CreateMessageDto {
  text: string
  senderId: number
  dialogId: number
  type?: Type
}

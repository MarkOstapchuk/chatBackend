import { Optional } from '@nestjs/common'

export class IMessageDto {
  @Optional()
  id: number
  text: string
  senderId: number
  dialogId: number
}

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
}

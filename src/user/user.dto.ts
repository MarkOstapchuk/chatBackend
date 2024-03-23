import { IsEmail, IsString, MinLength } from 'class-validator'

export class UserDto {
  @IsEmail()
  email: string
  name?: string
  pictureUrl?: string
  @IsString()
  username: string
  @MinLength(8, { message: 'The password must be at least 8 characters' })
  @IsString()
  password: string
}

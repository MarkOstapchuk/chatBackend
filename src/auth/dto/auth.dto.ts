import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
  @IsEmail()
  email: string
  name?: string
  pictureUrl?: string
  @IsString()
  username: string
  @MinLength(8, { message: 'The password must be at least 8 characters' })
  @IsString()
  password: string
  @MinLength(8, {
    message: 'The repeat-password must be at least 8 characters'
  })
  @IsString()
  secondPassword: string
}

export class LoginDto {
  @IsOptional()
  @IsString()
  email?: string
  @IsOptional()
  @IsString()
  username?: string
  @IsString()
  password: string
}

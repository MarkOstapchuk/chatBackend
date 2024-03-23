import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { AuthDto, LoginDto } from './dto/auth.dto'
import { verify } from 'argon2'
import { Response } from 'express'
import { DOMAIN } from '../consts'

@Injectable()
export class AuthService {
  EXPIRES_DAY_REFRESH_TOKEN = 1
  REFRESH_TOKEN_NAME = 'refreshToken'

  constructor(
    private jwt: JwtService,
    private userService: UserService
  ) {}

  async login(dto: LoginDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.validateUser(dto)
    const tokens = this.issueTokens(user.id)

    return { user, ...tokens }
  }

  async register(dto: AuthDto) {
    const oldUser = await this.userService.getByUsernameOrEmail(
      dto.username,
      dto.email
    )

    if (oldUser) throw new BadRequestException('User already exists')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.create(dto)

    const tokens = this.issueTokens(user.id)

    return { user, ...tokens }
  }

  private issueTokens(userId: number) {
    const data = { id: userId }
    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h'
    })
    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d'
    })

    return { accessToken, refreshToken }
  }

  private async validateUser(dto: LoginDto) {
    const user = await this.userService.getByUsernameAndEmail(
      dto.username,
      dto.email
    )

    if (!user) throw new NotFoundException('User not found')

    const isValid = await verify(user.password, dto.password)

    if (!isValid) throw new UnauthorizedException('Invalid password')

    return user
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken)
    if (!result) throw new UnauthorizedException('Invalid refresh token')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.getById(result.id)
    const tokens = this.issueTokens(user.id)
    return {
      user,
      ...tokens
    }
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRES_DAY_REFRESH_TOKEN)
    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: DOMAIN,
      secure: false,
      sameSite: 'lax'
    })
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: DOMAIN,
      expires: new Date(0),
      secure: false,
      sameSite: 'lax'
    })
  }
}

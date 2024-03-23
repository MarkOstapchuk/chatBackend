import { Controller, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from '../auth/decorators/auth.decorators'
import { CurrentUser } from '../auth/decorators/user.decorator'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @Auth()
  async getAll() {
    return this.userService.getAll()
  }

  @Get()
  @Auth()
  async getAllOther(@CurrentUser('id') id: number) {
    return this.userService.getAllOther(id)
  }

  @Get('/search/:username')
  async findUsers(@Param('username') username: string) {
    return this.userService.findUsers(username)
  }

  @Get('/profile')
  @Auth()
  async getCurrentUser(@CurrentUser('id') id: string) {
    return this.userService.getById(+id)
  }

  @Get(':id')
  @Auth()
  async getUserById(@Param('id') id: string) {
    return this.userService.getById(+id)
  }
}

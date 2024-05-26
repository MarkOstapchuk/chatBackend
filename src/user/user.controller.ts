import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from '../auth/decorators/auth.decorators'
import { CurrentUser } from '../auth/decorators/user.decorator'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname, join } from 'path'

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
  @Auth()
  async findUsers(
    @Param('username') username: string,
    @CurrentUser('id') id: number
  ) {
    return this.userService.findUsers(username, id)
  }

  @Get('/searchDialog/:username')
  @Auth()
  async findDialogs(
    @Param('username') username: string,
    @CurrentUser('id') id: number
  ) {
    return this.userService.findDialogs(username, id)
  }

  @Get('/profile')
  @Auth()
  async getCurrentUser(@CurrentUser('id') id: string) {
    return this.userService.getById(+id)
  }

  @Get(':id')
  @Auth()
  async getUserById(@Param('id') id: string) {
    console.log(id)
    return this.userService.getById(+id)
  }

  @Post('upload')
  @Auth()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/img',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('')
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    })
  )
  async local(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') id: string
  ) {
    const updatedUser = await this.userService.update(+id, {
      pictureUrl: file.filename
    })
    return {
      statusCode: 200,
      data: updatedUser
    }
  }

  @Get('/image/:filename')
  async getImage(@Res() res, @Param('filename') filename) {
    const filePath = join(__dirname, '../..', 'public', 'img', filename)
    res.sendFile(filePath)
  }
}

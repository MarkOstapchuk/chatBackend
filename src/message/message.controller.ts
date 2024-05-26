import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorators'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname, join } from 'path'

@Controller('message')
export class MessageController {
  @Post('/uploadImage')
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
  async local(@UploadedFile() file: Express.Multer.File) {
    return {
      file: file,
      statusCode: 200
    }
  }

  @Get('/image/:filename')
  async getImage(@Res() res, @Param('filename') filename) {
    const filePath = join(__dirname, '../..', 'public', 'img', filename)
    res.sendFile(filePath)
  }

  @Post('/uploadFile')
  @Auth()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9)
          const ext = extname(file.originalname)
          const filename = `${uniqueSuffix}${ext}`
          callback(null, filename)
        }
      })
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { filename: file.filename }
  }

  @Get('/file/:filename')
  async getFile(@Res() res, @Param('filename') filename) {
    const filePath = join(__dirname, '../..', 'public', 'uploads', filename)
    res.sendFile(filePath)
  }
}

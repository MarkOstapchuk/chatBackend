import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { DialogService } from './dialog.service'
import { Auth } from '../auth/decorators/auth.decorators'
import { CurrentUser } from '../auth/decorators/user.decorator'

@Controller('dialog')
export class DialogController {
  constructor(private readonly dialogService: DialogService) {}

  @Auth()
  @Post()
  async create(
    @Body()
    data: { userId: number; name: string; pictureUrl: string | undefined },
    @CurrentUser('id') id: number,
    @CurrentUser('username') name: string,
    @CurrentUser('pictureUrl') pictureUrl: string
  ) {
    return this.dialogService.createDialog(data, {
      userId: id,
      name,
      pictureUrl
    })
  }

  // @Get()
  // @Auth()
  // async getAll() {
  //   return this.dialogService.getAll()
  // }

  @Get('/:id')
  @Auth()
  async getDialog(@Param('id') dialogId: string) {
    return this.dialogService.getById(+dialogId)
  }
}

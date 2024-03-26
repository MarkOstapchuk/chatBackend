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
    @Body() data: { userId: number; name: string },
    @CurrentUser('id') id: number,
    @CurrentUser('username') name: string
  ) {
    return this.dialogService.createDialog([data, { userId: id, name }])
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

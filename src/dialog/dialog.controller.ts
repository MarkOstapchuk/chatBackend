import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { DialogService } from './dialog.service'
import { DialogDto } from './dialog.dto'
import { Auth } from '../auth/decorators/auth.decorators'
import { CurrentUser } from '../auth/decorators/user.decorator'

@Controller('dialog')
export class DialogController {
  constructor(private readonly dialogService: DialogService) {}

  @Auth()
  @Post()
  async create(
    @Body() dto: DialogDto,
    @CurrentUser('id') id: number,
    @CurrentUser('username') name: string
  ) {
    return this.dialogService.createDialog(dto, { userId: id, name })
  }

  @Get()
  @Auth()
  async getAll() {
    return this.dialogService.getAll()
  }

  @Get('/:id')
  @Auth()
  async getDialog(@Param('id') id: string, @CurrentUser('id') userId: number) {
    return this.dialogService.getById(id, userId)
  }

  @Get('/named/:id')
  @Auth()
  async getNamedDialog(@Param('id') id: string) {
    return this.dialogService.getNamedById(id)
  }
}

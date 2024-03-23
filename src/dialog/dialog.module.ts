import { Module } from '@nestjs/common'
import { DialogService } from './dialog.service'
import { DialogController } from './dialog.controller'
import { PrismaService } from '../prisma.service'

@Module({
  controllers: [DialogController],
  providers: [DialogService, PrismaService]
})
export class DialogModule {}

import { Module } from '@nestjs/common'
import { MessageService } from './message.service'
import { MessageGateway } from './message.gateway'
import { PrismaService } from '../prisma.service'
import { MessageController } from './message.controller';

@Module({
  providers: [MessageGateway, MessageService, PrismaService],
  controllers: [MessageController]
})
export class MessageModule {}

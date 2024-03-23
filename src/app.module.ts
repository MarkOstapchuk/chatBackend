import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { DialogModule } from './dialog/dialog.module'
import { MessageModule } from './message/message.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, DialogModule, MessageModule]
})
export class AppModule {}

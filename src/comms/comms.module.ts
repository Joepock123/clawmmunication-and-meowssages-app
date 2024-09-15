import { Module } from '@nestjs/common';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [UserModule],
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}

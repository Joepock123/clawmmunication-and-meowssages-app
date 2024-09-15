import { Module } from '@nestjs/common';
import { CommsModule } from './comms/comms.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [CommsModule, UserModule],
})
export class AppModule {}

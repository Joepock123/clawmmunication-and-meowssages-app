import { Controller, Get, Param } from '@nestjs/common';
import { CommsService } from './comms.service';
import { NextDeliveryComms } from 'src/types/types';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('your-next-delivery/:userId')
  async getYourNextDeliveryComms(
    @Param('userId') userId: string,
  ): Promise<NextDeliveryComms> {
    return this.commsService.getYourNextDeliveryComms(userId);
  }
}

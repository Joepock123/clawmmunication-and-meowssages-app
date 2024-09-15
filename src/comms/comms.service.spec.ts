import { Test, TestingModule } from '@nestjs/testing';
import { CommsService } from './comms.service';
import { UserService } from 'src/users/users.service';
import { User } from 'src/types/types';
import { user } from 'src/users/users.data';

describe('CommsService', () => {
  let commsService: CommsService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommsService,
        {
          provide: UserService,
          useValue: {
            getUserAndActiveSubscriptions: jest.fn(),
          },
        },
      ],
    }).compile();

    commsService = module.get<CommsService>(CommsService);
    userService = module.get<UserService>(UserService);
  });

  it('should return correct next delivery comms', async () => {
    const mockUser: User = {
      ...user,
      cats: user?.cats.filter((cat) => cat.subscriptionActive),
    };

    jest
      .spyOn(userService, 'getUserAndActiveSubscriptions')
      .mockResolvedValue(mockUser);

    const result = await commsService.getYourNextDeliveryComms('mock-user-id');

    expect(result).toEqual({
      title: 'Your next delivery for Dorian and Ocie',
      message:
        "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
      totalPrice: 134.0,
      freeGift: true,
    });
  });
});

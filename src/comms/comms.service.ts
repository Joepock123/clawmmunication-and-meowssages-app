import { Injectable } from '@nestjs/common';
import { NextDeliveryComms, PouchSizeType, User } from 'src/types/types';
import { UserService } from 'src/users/users.service';
import { formatNouns } from 'src/utils/utils';

const catFoodCosts = new Map<PouchSizeType, number>([
  ['A', 55.5],
  ['B', 59.5],
  ['C', 62.75],
  ['D', 66.0],
  ['E', 69.0],
  ['F', 71.25],
]);

@Injectable()
export class CommsService {
  constructor(private readonly userService: UserService) {}

  async getYourNextDeliveryComms(userId: string): Promise<NextDeliveryComms> {
    const user = await this.userService.getUserAndActiveSubscriptions(userId);

    const { title, message } = this.generateTitleAndMessage(user);
    const totalPrice = this.calculateCatFoodCost(
      user.cats.map((cat) => cat.pouchSize),
    );

    return { title, message, totalPrice, freeGift: totalPrice > 120 };
  }

  calculateCatFoodCost(catFoodTypes: PouchSizeType[]): number {
    let totalCost = 0;

    for (const foodType of catFoodTypes) {
      const cost = catFoodCosts.get(foodType);

      if (cost === undefined) {
        throw new Error(`Invalid cat food type: ${foodType}`);
      }

      totalCost += cost;
    }

    return totalCost;
  }

  generateTitleAndMessage(user: User): {
    title: string;
    message: string;
  } {
    const { firstName, cats } = user;
    const catNames = formatNouns(cats.map((cat) => cat.name));
    const title = `Your next delivery for ${catNames}`;
    const message = `Hey ${firstName}! In two days' time, we'll be charging you for your next order for ${catNames}'s fresh food.`;
    return { title, message };
  }
}

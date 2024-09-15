import { Injectable } from '@nestjs/common';
import { userData } from './users.data';
import { User } from 'src/types/types';

@Injectable()
export class UserService {
  async getUserAndActiveSubscriptions(userId: string): Promise<User> {
    return new Promise((resolve) => {
      const user = userData.get(userId);

      if (!user) {
        throw new Error(`User ${userId} Not Found`);
      }

      const userFiltered = {
        ...user,
        cats: user?.cats.filter((cat) => cat.subscriptionActive),
      };
      setTimeout(() => resolve(userFiltered), 500);
    });
  }
}

import { User } from '../types/types';

export const user: User = {
  id: 'ff535484-6880-4653-b06e-89983ecf4ed5',
  firstName: 'Kayleigh',
  lastName: 'Wilderman',
  email: 'Kayleigh_Wilderman@hotmail.com',
  cats: [
    {
      name: 'Dorian',
      subscriptionActive: true,
      breed: 'Thai',
      pouchSize: 'C',
    },
    {
      name: 'Ocie',
      subscriptionActive: true,
      breed: 'Somali',
      pouchSize: 'F',
    },
    {
      name: 'Eldridge',
      subscriptionActive: false,
      breed: 'Himalayan',
      pouchSize: 'A',
    },
  ],
};

export const userData = new Map<User['id'], User>([[user.id, user]]);

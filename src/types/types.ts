export type PouchSizeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type CatBreed = 'Thai' | 'Somali' | 'Himalayan';

export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: CatBreed;
  pouchSize: PouchSizeType;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}

export interface NextDeliveryComms {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

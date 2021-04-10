import {Address} from './address';
import {User} from './user';

export class RealEstate {
  id;
  name: string;
  type: string;
  description: string;
  bedroom: number;
  garden: boolean;
  price: number;
  rating: number;
  address: Address;
  user: User;
}

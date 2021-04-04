import {Address} from './address';

export class RealEstate {
  id;
  name: string;
  type: string;
  description: string;
  bedroom: number;
  garden: boolean;
  price: number;
  rating;
  address: Address;
}

import {Address} from './Address';

export class RealEstate {
  id;
  name: string;
  type: string;
  description: string;
  bedroom: number;
  garden: Boolean;
  price: number;
  rating;
  address: Address = new Address();

}

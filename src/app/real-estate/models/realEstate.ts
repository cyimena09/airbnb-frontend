import {Address} from '../../shared/models/address';
import {User} from '../../user/models/user';
import {Comment} from './comment';
import {Booking} from '../../booking/models/booking';
import {Category} from './category';
import {Purpose} from './purpose';

export class RealEstate {
  id: string;
  name: string;
  description: string;
  price: number;
  bedroom: number;
  hasGarden: boolean;
  hasPool: boolean;
  rating: number;
  isActive: boolean;
  address: Address;
  category: Category;
  comment: Comment[];
  goals: Purpose[];
  bookings: Booking[];
  user: User;

}

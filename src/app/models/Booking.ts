import {User} from './User';
import {RealEstate} from './RealEstate';

export class Booking{
  id;
  startDate;
  endDate;
  user: User = new User();
  realEstate: RealEstate = new RealEstate();
}
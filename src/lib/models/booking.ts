import {User} from './user';
import {RealEstate} from './real-estate';

export class Booking {
  id;
  startDate;
  endDate;
  status;
  user: User;
  realEstate: RealEstate;
}

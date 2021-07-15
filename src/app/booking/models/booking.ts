import {User} from '../../user/models/user';
import {RealEstate} from '../../real-estate/models/real-estate';

export class Booking {
  id;
  startDate;
  endDate;
  status;
  realEstate: RealEstate;
  user: User;
}

import {RealEstate} from '../../real-estate/models/realEstate';
import {User} from '../../user/models/user';

export class Booking {
  id;
  startDate;
  endDate;
  status;
  realEstate: RealEstate;
  user: User;
}

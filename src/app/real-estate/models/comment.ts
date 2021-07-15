import {User} from '../../user/models/user';
import {RealEstate} from './real-estate';

export class Comment {
  id: string;
  text: string;
  creationDate: Date;
  lastModifiedDate: Date;
  realEstate: RealEstate;
  user: User;
}

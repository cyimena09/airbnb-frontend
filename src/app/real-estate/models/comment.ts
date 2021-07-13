import {RealEstate} from './realEstate';
import {User} from '../../user/models/user';

export class Comment {
  id: string;
  text: string;
  creationDate: Date;
  lastModifiedDate: Date;
  realEstate: RealEstate;
  user: User;
}

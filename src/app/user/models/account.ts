import {Profile} from './profile';
import {User} from './user';

export class Account {
  id: number;
  email: string;
  password: string;
  user: User;
  profiles: Profile[];
}

import {Address} from '../../shared/models/address';
import {Account} from './account';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  address: Address;
  account: Account;
}

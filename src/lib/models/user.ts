import {Address} from './address';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate;
  phoneNumber;
  email;
  password;
  address: Address;
}

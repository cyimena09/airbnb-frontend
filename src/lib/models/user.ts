import {Address} from './address';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  password: string;
  address: Address;
}

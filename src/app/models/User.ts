import {Address} from './Address';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate;
  phoneNumber;
  email;
  password
  address: Address = new Address();

}

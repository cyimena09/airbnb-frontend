import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Address {
  id: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

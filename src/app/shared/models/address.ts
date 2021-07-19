import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Address {
  id: string;
  street: string;
  streetNumber: string;
  boxNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

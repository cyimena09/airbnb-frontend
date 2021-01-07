import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
   private apiURL = '/api/v1/bookings/';

  constructor(private httpClient: HttpClient) { }

  getBookingsByUser(){
    return this.httpClient.get(this.apiURL);
  }

  createBooking(newBooking) {
    return this.httpClient.post(this.apiURL, newBooking);
  }

}

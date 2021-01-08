import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiURL = '/api/v1/bookings/';

  constructor(private httpClient: HttpClient) { }

  getBookingsByRealEstate(){
    return this.httpClient.get('/api/v1/realestates/3/bookings/');
  }
  getBookingsByUser(){
    return this.httpClient.get('/api/v1/users/2/bookings');
  }

  createBooking(newBooking) {
    return this.httpClient.post(this.apiURL, newBooking);
  }

  deleteBooking(id){
    return this.httpClient.delete(this.apiURL + id)
  }


}

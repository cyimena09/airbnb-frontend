import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiURL = '/api/v1/bookings/';

  constructor(private httpClient: HttpClient) { }

  getBookings(){
    return this.httpClient.get(this.apiURL);
  }

  getBookingsByRealEstate(id){
    return this.httpClient.get('/api/v1/realestates/' + id + '/bookings');
  }

  getBookingsByUser(id){
    return this.httpClient.get('/api/v1/users/' + id + '/bookings');
  }

  createBooking(newBooking) {
    return this.httpClient.post(this.apiURL, newBooking);
  }

  updateBooking(id){
    // set status on cancelled
    return this.httpClient.put(this.apiURL + id, null)
  }


}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Booking} from '../../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiURL = environment.API_BOOKING;

  constructor(private httpClient: HttpClient) {
  }

  getBookings() {
    return this.httpClient.get(this.apiURL);
  }

  getBookingsByRealEstate(id) {
    return this.httpClient.get(`${this.apiURL}/real_estates/${id}/bookings`);
  }

  getBookingsByUserId(id) {
    return this.httpClient.get(`${this.apiURL}/users/${id}/bookings`).pipe(
      map(response => {
        return response['content'] as Booking[];
      }));
  }

  createBooking(newBooking) {
    return this.httpClient.post(this.apiURL, newBooking);
  }

  updateBooking(id) {
    // set status on cancelled
    return this.httpClient.put(this.apiURL + id, null);
  }


}

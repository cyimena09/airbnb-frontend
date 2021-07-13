import { Component, OnInit } from '@angular/core';
import {Booking} from '../../models/booking';
import {User} from '../../../user/models/user';
import {BookingService} from '../../services/booking/booking.service';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.scss']
})
export class ListBookingsComponent implements OnInit {

  bookings: Booking[] = [];
  authenticatedUser: User;

  constructor(private bookingService: BookingService, private authService: AuthService) {
    this.authService.emitAuthUser();
    this.authenticatedUser = this.authService.authenticatedUser;
  }

  ngOnInit(): void {
    this.bookingService.getBookingsByUserId(this.authenticatedUser.id).subscribe(
      (data: Booking[]) => {
        console.log(data)
        this.bookings = data;
      });
  }

}

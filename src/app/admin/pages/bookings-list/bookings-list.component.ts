import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../booking/services/booking/booking.service';
import {Booking} from '../../../booking/models/booking';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss']
})
export class BookingsListComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookingsByUser();
  }

  getBookingsByUser() {
    return this.bookingService.getBookings().subscribe(
      (data: any) => {
        this.bookings = data.content;
      });
  }

  onCancelBooking(id) {
    this.bookingService.updateBooking(id).subscribe(
      () => {console.log("réservation annulé")}
    );
  }

}

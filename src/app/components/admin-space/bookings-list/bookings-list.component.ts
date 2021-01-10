import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../services/booking/booking.service';
import {Booking} from '../../../models/Booking';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss']
})
export class BookingsListComponent implements OnInit {
  bookings: [Booking];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookingsByUser();
  }

  getBookingsByUser(){
    return this.bookingService.getBookings().subscribe(
      (data: any) => {
        this.bookings = data.content;
      }
    );
  }


}

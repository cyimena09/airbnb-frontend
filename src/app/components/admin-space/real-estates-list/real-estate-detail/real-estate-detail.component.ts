import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../../services/booking/booking.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.scss']
})
export class RealEstateDetailComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  realEstate: any = { };
  bookings;

  constructor(private bookingService: BookingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookingByRealEstate();
  }

  getBookingByRealEstate(){
    return this.bookingService.getBookingsByRealEstate(this.id).subscribe(
      (data: any) => {
        this.bookings = data.content;
        this.realEstate = this.bookings[0].realEstate;
      });
  }

}

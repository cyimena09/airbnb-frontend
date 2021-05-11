import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../booking/services/booking/booking.service';
import {ActivatedRoute} from '@angular/router';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {RealEstate} from '../../../real-estate/models/realEstate';

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.scss']
})
export class RealEstateDetailComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  realEstate: RealEstate;
  bookings;

  constructor(private realEstateService: RealEstateService, private bookingService: BookingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookingByRealEstate();
    this.getRealEstate();
  }

  getRealEstate(){
    this.realEstateService.getRealEstateById(this.id).subscribe(
      (data: any) => {
        this.realEstate = data;
      });
  }

  getBookingByRealEstate(){
    return this.bookingService.getBookingsByRealEstate(this.id).subscribe(
      (data: any) => {
        this.bookings = data.content;
      });
  }

}

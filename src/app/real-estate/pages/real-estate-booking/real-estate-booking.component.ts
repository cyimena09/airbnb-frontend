import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {RealEstate} from '../../../../lib/models/real-estate';
import {Booking} from '../../../../lib/models/booking';
import {BookingService} from '../../../booking/services/booking/booking.service';

@Component({
  selector: 'app-real-estate-booking',
  templateUrl: './real-estate-booking.component.html',
  styleUrls: ['./real-estate-booking.component.scss']
})
export class RealEstateBookingComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  realEstate: RealEstate = null;

  constructor(private realEstateService: RealEstateService,
              private bookingService: BookingService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.getRealEstate();
  }

  getRealEstate(){
    this.realEstateService.getRealEstateById(this.id).subscribe(
      (data: any) => {
        this.realEstate = data;
      });
  }

  onCreateBooking(id){
    let newBooking = new Booking();
    newBooking.realEstate.id = id;
    newBooking.user.id   = 1;
    newBooking.startDate = "2021-01-05 11:30:01";
    newBooking.endDate = "2021-01-06 11:30:01";

    this.bookingService.createBooking(newBooking).subscribe(
      () => {
        console.log("Le bien a été réservé ")
      },
      (message) => {console.log(message.error)}
      );
  }

}

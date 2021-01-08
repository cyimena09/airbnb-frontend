import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../services/real-estate/real-estate.service';
import {RealEstate} from '../../../models/RealEstate';
import {User} from '../../../models/User';
import {BookingService} from '../../../services/booking/booking.service';
import {Booking} from '../../../models/Booking';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.scss']
})
export class RealEstatesListComponent implements OnInit {
  realestates
  bookings;

  constructor(private reService: RealEstateService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getRealEstates();
    this.getBookingsByRealEstate()
  }

  getRealEstates(){
    this.reService.getRealEstates().subscribe(
      (data: any) => {this.realestates = data.content;}
    )
  }

  onCreateRE(){
    let newRE = new RealEstate();
    newRE.name = "Villa";
    newRE.price = 500;
    // newRE.FK_CountryID = 1;
    // newRE.FK_PostalCode = 2
    this.reService.createRealEstate(newRE).subscribe(
      () => {console.log("Le bien a été créé")}
    )
  }

  onCreateBooking(){
    let newBooking = new Booking();
    newBooking.realEstate.id = 3;
    newBooking.user.id   = 1;
    newBooking.startDate = "2021-01-05 11:30:01";
    newBooking.endDate = "2021-01-06 11:30:01";

    this.bookingService.createBooking(newBooking).subscribe(
      () => {console.log("Le bien a été réservé ")});
  }

  onDeleteBooking(id){
    let newBooking = new Booking();
    newBooking.realEstate.id = 3;
    newBooking.user.id   = 1;
    newBooking.startDate = "2022-01-05 11:30:01";
    newBooking.endDate = "2021-01-06 11:30:01";

    this.bookingService.deleteBooking(id).subscribe(
      () => {console.log("Le bien a été mise à jour")}
    )
  }



  getBookingsByRealEstate(){
    this.bookingService.getBookingsByRealEstate().subscribe(
      (data: any) => {this.bookings = data.content; console.log(data.content)}
    );
  }

}

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
  }

  getRealEstates(){
    this.reService.getRealEstates().subscribe(
      (data: any) => {
        this.realestates = data.content;
      },
      (error) => {console.log("Une erreur est survenue", error)}
    )
  }

  onCreateRE(){
    let newRE = new RealEstate();
    newRE.name = "Hotel Hilton";
    newRE.price = 500;
    newRE.address.street = "Rue cours boisacq"
    newRE.address.number = 18;
    newRE.address.postalCode = 1301;
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


}

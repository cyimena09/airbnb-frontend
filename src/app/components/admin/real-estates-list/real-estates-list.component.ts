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

  constructor(private reService: RealEstateService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getRealEstates();
  }

  getRealEstates(){
    this.reService.getRealEstates().subscribe(
      (data: any) => {this.realestates = data.content; console.log(data)}
    )
  }

  onCreateRE(){
    let newRE = new RealEstate();
    newRE.name = "Auberge de jeunesse";
    newRE.price = 500;
    // newRE.FK_CountryID = 1;
    // newRE.FK_PostalCode = 2
    this.reService.createRealEstate(newRE).subscribe(
      () => {console.log("Le bien a été créé")}
    )
  }

  onBooking(){
    let newBooking = new Booking();
    newBooking.realEstate.id = 1;
    newBooking.user.id   = 1;
    this.bookingService.createBooking(newBooking).subscribe(
      () => {console.log("Le bien a été réservé ")}
    );
  }

}

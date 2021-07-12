import {Component, OnInit} from '@angular/core';
import {RealEstate} from '../../models/realEstate';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {ActivatedRoute} from '@angular/router';
import {Booking} from '../../../booking/models/booking';
import {BookingService} from '../../../booking/services/booking/booking.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {User} from '../../../user/models/user';

@Component({
  selector: 'app-public-single-real-estate',
  templateUrl: './public-single-real-estate.component.html',
  styleUrls: ['./public-single-real-estate.component.scss']
})
export class PublicSingleRealEstateComponent implements OnInit {
  realEstateId = this.route.snapshot.params['id'];
  realEstate: RealEstate;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private realEstateService: RealEstateService,
    private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.realEstateService.getRealEstateById(this.realEstateId).subscribe(
      (data: RealEstate) => {
        this.realEstate = data;
      });
  }

  onCreateBooking(booking: Booking) {
    const user = new User();
    user.id = this.authService.authenticatedUser.id;
    booking.user = user;
    booking.realEstate = this.realEstate;
    booking.status = 'UNPAID';
    this.bookingService.createBooking(booking).subscribe();
  }

}

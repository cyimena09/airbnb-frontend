import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import {RealEstateBookingComponent} from './pages/real-estate-booking/real-estate-booking.component';
import {RealEstateLearnMoreComponent} from './pages/real-estate-learn-more/real-estate-learn-more.component';
import {RatingComponent} from './components/rating/rating.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RealEstateBookingComponent,
    RealEstateLearnMoreComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    NgbRatingModule
  ],
  exports: [RatingComponent]
})
export class RealEstateModule { }

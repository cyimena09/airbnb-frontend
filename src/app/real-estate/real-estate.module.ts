import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import {RealEstateBookingComponent} from './pages/real-estate-booking/real-estate-booking.component';
import {RealEstateLearnMoreComponent} from './pages/real-estate-learn-more/real-estate-learn-more.component';
import {RatingComponent} from './components/rating/rating.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {AddRealEstateComponent} from './pages/add-real-estate/add-real-estate.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListRealEstatesComponent } from './components/list-real-estates/list-real-estates.component';
import { SingleRealEstateComponent } from './components/single-real-estate/single-real-estate.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';


@NgModule({
  declarations: [
    RealEstateBookingComponent,
    RealEstateLearnMoreComponent,
    RatingComponent,
    AddRealEstateComponent,
    ListRealEstatesComponent,
    SingleRealEstateComponent,
    ListCommentsComponent,
    AddCommentComponent,
    RealEstateComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    NgbRatingModule,
    ReactiveFormsModule
  ],
  exports: [
    RatingComponent,
    ListRealEstatesComponent
  ]
})
export class RealEstateModule { }

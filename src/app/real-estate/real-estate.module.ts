import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RealEstateRoutingModule} from './real-estate-routing.module';
import {RealEstateBookingComponent} from './pages/real-estate-booking/real-estate-booking.component';
import {RealEstateLearnMoreComponent} from './pages/real-estate-learn-more/real-estate-learn-more.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {AddRealEstateComponent} from './components/add-real-estate/add-real-estate.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';
import {SearchFormRealEstateComponent} from './components/search-form-real-estate/search-form-real-estate.component';
import {PublicSingleRealEstateComponent} from './pages/public-single-real-estate/public-single-real-estate.component';
import {PublicSingleRealEstateViewComponent} from './components/public-single-real-estate-view/public-single-real-estate-view.component';
import {SharedModule} from '../shared/shared.module';
import {BookingModule} from '../booking/booking.module';
import { ListCommentsViewComponent } from './components/list-comments-view/list-comments-view.component';
import { NewCommentViewComponent } from './components/new-comment-view/new-comment-view.component';
import { ListRealEstatesViewComponent } from './components/list-real-estates-view/list-real-estates-view.component';


@NgModule({
  declarations: [
    RealEstateBookingComponent,
    RealEstateLearnMoreComponent,
    AddRealEstateComponent,
    RealEstateComponent,
    SearchFormRealEstateComponent,
    PublicSingleRealEstateComponent,
    PublicSingleRealEstateViewComponent,
    ListCommentsViewComponent,
    NewCommentViewComponent,
    ListRealEstatesViewComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    NgbRatingModule,
    ReactiveFormsModule,
    SharedModule,
    BookingModule
  ],
  exports: [
    SearchFormRealEstateComponent,
    ListRealEstatesViewComponent
  ]
})
export class RealEstateModule {
}

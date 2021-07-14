import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RealEstateRoutingModule} from './real-estate-routing.module';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';
import {PublicSingleRealEstateComponent} from './pages/public-single-real-estate/public-single-real-estate.component';
import {PublicSingleRealEstateViewComponent} from './components/public-single-real-estate-view/public-single-real-estate-view.component';
import {SharedModule} from '../shared/shared.module';
import {BookingModule} from '../booking/booking.module';
import { ListCommentsViewComponent } from './components/list-comments-view/list-comments-view.component';
import { NewCommentViewComponent } from './components/new-comment-view/new-comment-view.component';
import { ListRealEstatesViewComponent } from './components/list-real-estates-view/list-real-estates-view.component';
import { SearchRealEstateViewComponent } from './components/search-real-estate-view/search-real-estate-view.component';
import { CreateRealEstateViewComponent } from './components/create-real-estate-view/create-real-estate-view.component';


@NgModule({
  declarations: [
    RealEstateComponent,
    PublicSingleRealEstateComponent,
    PublicSingleRealEstateViewComponent,
    ListCommentsViewComponent,
    NewCommentViewComponent,
    ListRealEstatesViewComponent,
    SearchRealEstateViewComponent,
    CreateRealEstateViewComponent
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
    ListRealEstatesViewComponent,
    SearchRealEstateViewComponent
  ]
})
export class RealEstateModule {
}

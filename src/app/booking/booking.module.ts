import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookingRoutingModule} from './booking-routing.module';
import {NewBookingViewComponent} from './components/new-booking-view/new-booking-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookingComponent} from './pages/booking/booking.component';
import {ListBookingsComponent} from './pages/list-bookings/list-bookings.component';
import {ListBookingsViewComponent} from './components/list-bookings-view/list-bookings-view.component';
import {SingleBookingComponent} from './components/single-booking/single-booking.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    NewBookingViewComponent,
    BookingComponent,
    ListBookingsComponent,
    ListBookingsViewComponent,
    SingleBookingComponent
  ],
  exports: [
    NewBookingViewComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BookingModule {
}

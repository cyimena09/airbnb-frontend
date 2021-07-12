import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { NewBookingViewComponent } from './components/new-booking-view/new-booking-view.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [NewBookingViewComponent],
    exports: [
        NewBookingViewComponent
    ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }

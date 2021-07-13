import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './pages/booking/booking.component';
import {ListBookingsComponent} from './pages/list-bookings/list-bookings.component';
import {SingleBookingComponent} from './components/single-booking/single-booking.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingComponent,
    children: [
      {path: '', component: ListBookingsComponent},
      {path:':id', component: SingleBookingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }

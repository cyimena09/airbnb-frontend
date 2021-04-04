import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSpaceRoutingModule } from './admin-space-routing.module';
import {AdminSpaceComponent} from './pages/admin-space/admin-space.component';
import {BookingsListComponent} from './pages/bookings-list/bookings-list.component';
import {RealEstatesListComponent} from './pages/real-estates-list/real-estates-list.component';
import {UsersListComponent} from './pages/users-list/users-list.component';
import {UserDetailComponent} from './pages/user-detail/user-detail.component';
import {RealEstateDetailComponent} from './pages/real-estate-detail/real-estate-detail.component';


@NgModule({
  declarations: [
    AdminSpaceComponent,
    BookingsListComponent,
    RealEstatesListComponent,
    RealEstateDetailComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AdminSpaceRoutingModule
  ]
})
export class AdminSpaceModule { }

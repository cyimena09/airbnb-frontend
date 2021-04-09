import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import {RealEstateModule} from '../real-estate/real-estate.module';


@NgModule({
  declarations: [
    UserSpaceComponent,
    PersonalInfoComponent,
    ReservationComponent,
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule,
    ReactiveFormsModule,
    RealEstateModule
  ]
})
export class UserSpaceModule { }

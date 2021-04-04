import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import {AddRealEstateComponent} from './pages/add-real-estate/add-real-estate.component';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserSpaceComponent,
    AddRealEstateComponent,
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserSpaceModule { }

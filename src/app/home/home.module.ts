import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {HomeComponent} from './pages/home/home.component';
import {RealEstateModule} from '../real-estate/real-estate.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RealEstateModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }

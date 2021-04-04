import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {HomeComponent} from './pages/home/home.component';
import {SigninComponent} from './pages/signin/signin.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {RealEstateModule} from '../real-estate/real-estate.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CatalogComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    RealEstateModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]
})
export class PublicModule { }

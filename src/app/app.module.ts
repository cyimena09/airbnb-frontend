import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TravelerComponent } from './components/admin/traveler/traveler.component';
import { RealEstateComponent } from './components/admin/real-estate/real-estate.component';
import { TravelerDetailComponent } from './components/admin/traveler/traveler-detail/traveler-detail.component';
import { RealEstateDetailComponent } from './components/user/booking/real-estate-detail/real-estate-detail.component';
import { HomebisComponent } from './components/homebis/homebis.component';
import { BookingComponent } from './components/user/booking/booking.component';
import { UpdateComponent } from './components/admin/real-estate/update/update.component';
import { AddRealEstateComponent } from './components/user/add-real-estate/add-real-estate.component';
import { UserRealEstateListComponent } from './components/user/user-space/user-real-estate-list/user-real-estate-list.component';
import { UserRealEstateUpdateComponent } from './components/user/user-space/user-real-estate-update/user-real-estate-update.component';
import { RealEstateBookingComponent } from './components/user/booking/real-estate-booking/real-estate-booking.component';
import { PaymentComponent } from './components/user/booking/real-estate-booking/payment/payment.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { SignupComponent } from './components/public/signup/signup.component';
import { SigninComponent } from './components/public/signin/signin.component';
// import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelerComponent,
    RealEstateComponent,
    TravelerDetailComponent,
    RealEstateDetailComponent,
    HomebisComponent,
    BookingComponent,
    UpdateComponent,
    AddRealEstateComponent,
    UserRealEstateListComponent,
    UserRealEstateUpdateComponent,
    RealEstateBookingComponent,
    PaymentComponent,
    HeaderComponent,
    UsersListComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

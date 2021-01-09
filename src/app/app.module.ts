import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TravelerComponent } from './components/admin/traveler/traveler.component';
import { RealEstateComponent } from './components/admin/real-estate/real-estate.component';
import { TravelerDetailComponent } from './components/admin/traveler/traveler-detail/traveler-detail.component';
import { HomebisComponent } from './components/homebis/homebis.component';
import { UpdateComponent } from './components/admin/real-estate/update/update.component';
import { AddRealEstateComponent } from './components/user/add-real-estate/add-real-estate.component';
import { UserRealEstateListComponent } from './components/user/user-space/user-real-estate-list/user-real-estate-list.component';
import { UserRealEstateUpdateComponent } from './components/user/user-space/user-real-estate-update/user-real-estate-update.component';
import { RealEstateBookingComponent } from './components/catalog/real-estate-booking/real-estate-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/admin-space/users-list/users-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { RealEstatesListComponent } from './components/admin-space/real-estates-list/real-estates-list.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SearchRealEstateComponent } from './components/search-real-estate/search-real-estate.component';
import { AdminSpaceComponent } from './components/admin-space/admin-space.component';
import { BookingsListComponent } from './components/admin-space/bookings-list/bookings-list.component';
import { UserDetailComponent } from './components/admin-space/users-list/user-detail/user-detail.component';
import { RealEstateLearnMoreComponent } from './components/catalog/real-estate-learn-more/real-estate-learn-more.component';
import {RealEstateDetailComponent} from './components/admin-space/real-estates-list/real-estate-detail/real-estate-detail.component';
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
    UpdateComponent,
    AddRealEstateComponent,
    UserRealEstateListComponent,
    UserRealEstateUpdateComponent,
    RealEstateBookingComponent,
    HeaderComponent,
    UsersListComponent,
    SignupComponent,
    SigninComponent,
    RealEstatesListComponent,
    CatalogComponent,
    SearchRealEstateComponent,
    AdminSpaceComponent,
    BookingsListComponent,
    UserDetailComponent,
    RealEstateLearnMoreComponent
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

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RealEstateModule} from './real-estate/real-estate.module';
import {PublicModule} from './public/public.module';
import {AdminSpaceModule} from './admin-space/admin-space.module';
import {UserSpaceModule} from './user-space/user-space.module';
import {BookingModule} from './booking/booking.module';
import {MessengerModule} from './messenger/messenger.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RealEstateModule,
    PublicModule,
    AdminSpaceModule,
    UserSpaceModule,
    BookingModule,
    MessengerModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

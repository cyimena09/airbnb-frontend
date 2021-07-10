import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RealEstateModule} from './real-estate/real-estate.module';
import {AdminSpaceModule} from './admin/admin-space.module';
import {UserSpaceModule} from './user/user-space.module';
import {BookingModule} from './booking/booking.module';
import {MessengerModule} from './messenger/messenger.module';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import { NotificationModule } from './notification/notification.module';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {rxStompConfig} from './rx-stomp.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RealEstateModule,
    AdminSpaceModule,
    UserSpaceModule,
    BookingModule,
    MessengerModule,
    AuthModule,
    HomeModule,
    AuthModule,
    SharedModule,
    NotificationModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-Fr" },
    {provide: InjectableRxStompConfig, useValue: rxStompConfig,},
    {provide: RxStompService, useFactory: rxStompServiceFactory, deps: [InjectableRxStompConfig]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

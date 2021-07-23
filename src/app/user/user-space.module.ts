import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserSpaceRoutingModule} from './user-space-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {RealEstateModule} from '../real-estate/real-estate.module';
import {ReservationsHistoryComponent} from './components/reservations-history/reservations-history.component';
import {CurrentReservationComponent} from './components/current-reservation/current-reservation.component';
import { UserRealEstatesListComponent } from './components/user-real-estates-list/user-real-estates-list.component';
import { UserRealEstateComponent } from './components/user-real-estate/user-real-estate.component';
import { UserComponent } from './pages/user/user.component';
import {SharedModule} from '../shared/shared.module';
import { AccountComponent } from './pages/account/account.component';
import { NewRealEstateComponent } from './pages/new-real-estate/new-real-estate.component';
import { PrivateSingleRealEstateComponent } from './pages/private-single-real-estate/private-single-real-estate.component';
import { PrivateListRealEstatesComponent } from './pages/private-list-real-estates/private-list-real-estates.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BillComponent } from './pages/bill/bill.component';
import { SeeLaterComponent } from './pages/see-later/see-later.component';
import { ParameterComponent } from './pages/parameter/parameter.component';
import { ConversationsComponent } from './tempo/conversations/conversations.component';
import { MessagesComponent } from './tempo/messages/messages.component';
import {MessengerComponent} from './pages/messenger/messenger.component';
import { SearchUserFormComponent } from './tempo/search-user-form/search-user-form.component';
import { NewMessageFormComponent } from './tempo/new-message-form/new-message-form.component';


@NgModule({
  declarations: [
    PersonalInfoComponent,
    ReservationsHistoryComponent,
    CurrentReservationComponent,
    UserRealEstatesListComponent,
    UserRealEstateComponent,
    UserComponent,
    AccountComponent,
    NewRealEstateComponent,
    PrivateSingleRealEstateComponent,
    PrivateListRealEstatesComponent,
    ResumeComponent,
    ResumeViewComponent,
    BookingComponent,
    BillComponent,
    SeeLaterComponent,
    ParameterComponent,
    ConversationsComponent,
    MessagesComponent,
    MessengerComponent,
    SearchUserFormComponent,
    NewMessageFormComponent
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule,
    ReactiveFormsModule,
    RealEstateModule,
    SharedModule
  ]
})
export class UserSpaceModule {
}

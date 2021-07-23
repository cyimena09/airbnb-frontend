import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './pages/user/user.component';
import {AccountComponent} from './pages/account/account.component';
import {NewRealEstateComponent} from './pages/new-real-estate/new-real-estate.component';
import {PrivateListRealEstatesComponent} from './pages/private-list-real-estates/private-list-real-estates.component';
import {PrivateSingleRealEstateComponent} from './pages/private-single-real-estate/private-single-real-estate.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {MessengerComponent} from './pages/messenger/messenger.component';
import {BookingComponent} from './pages/booking/booking.component';
import {BillComponent} from './pages/bill/bill.component';
import {SeeLaterComponent} from './pages/see-later/see-later.component';
import {ParameterComponent} from './pages/parameter/parameter.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'messenger', component: MessengerComponent},
      {path: 'bookings', component: BookingComponent},
      {path: 'bills', component: BillComponent},
      {path: 'see_later', component: SeeLaterComponent},
      {path: 'parameter', component: ParameterComponent},
      {path: 'real_estates', component: PrivateListRealEstatesComponent},
      {path: 'real_estates/:id', component: PrivateSingleRealEstateComponent},
      {path: 'new_real_estate', component: NewRealEstateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpaceRoutingModule {
}

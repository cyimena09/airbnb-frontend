import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddRealEstateComponent} from './components/user-space/add-real-estate/add-real-estate.component';
import {RealEstateBookingComponent} from './components/catalog/real-estate-booking/real-estate-booking.component';
import {UsersListComponent} from './components/admin-space/users-list/users-list.component';
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';
import {RealEstatesListComponent} from './components/admin-space/real-estates-list/real-estates-list.component';
import {AdminSpaceComponent} from './components/admin-space/admin-space.component';
import {BookingsListComponent} from './components/admin-space/bookings-list/bookings-list.component';
import {UserDetailComponent} from './components/admin-space/users-list/user-detail/user-detail.component';
import {RealEstateDetailComponent} from './components/admin-space/real-estates-list/real-estate-detail/real-estate-detail.component';
import {RealEstateLearnMoreComponent} from './components/catalog/real-estate-learn-more/real-estate-learn-more.component';
import {UserSpaceComponent} from './components/user-space/user-space.component';
import {MessengerComponent} from './components/messenger/messenger.component';


const routes: Routes = [
  // PUBLIC
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'messenger', component: MessengerComponent},
  {path: 'real-estate-learn-more/:id', component: RealEstateLearnMoreComponent},
  {path: 'real-estate-booking/:id', component: RealEstateBookingComponent},



  // USER
  {path: 'user-space', component: UserSpaceComponent,
    children: [
      {path: 'add-real-estate', component: AddRealEstateComponent},
    ]},

  // ADMIN
  {
    path: 'admin-space',
    component: AdminSpaceComponent,
    children: [
      {path: 'users-list', component: UsersListComponent},
      {path: 'users-list/:id', component: UserDetailComponent},
      {path: 'real-estates-list', component: RealEstatesListComponent},
      {path: 'real-estates-list/:id', component: RealEstateDetailComponent},
      {path: 'bookings-list', component: BookingsListComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

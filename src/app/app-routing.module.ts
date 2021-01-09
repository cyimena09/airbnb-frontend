import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddRealEstateComponent} from './components/user/add-real-estate/add-real-estate.component';
import {UserRealEstateListComponent} from './components/user/user-space/user-real-estate-list/user-real-estate-list.component';
import {UserRealEstateUpdateComponent} from './components/user/user-space/user-real-estate-update/user-real-estate-update.component';
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


const routes: Routes = [
  // PUBLIC
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'real-estate-learn-more/:id', component: RealEstateLearnMoreComponent},
  {path: 'real-estate-booking/:id', component: RealEstateBookingComponent},



  // USER
  {path: 'add-real-estate', component: AddRealEstateComponent},
  {path: 'user-space/user-real-estate-list', component: UserRealEstateListComponent},
  {path: 'user-space/real-estate-update/:id', component: UserRealEstateUpdateComponent},

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

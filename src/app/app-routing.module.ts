import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/public/home/home.component';
import {RealEstateDetailComponent} from './components/user/booking/real-estate-detail/real-estate-detail.component';
import {AddRealEstateComponent} from './components/user/add-real-estate/add-real-estate.component';
import {UserRealEstateListComponent} from './components/user/user-space/user-real-estate-list/user-real-estate-list.component';
import {UserRealEstateUpdateComponent} from './components/user/user-space/user-real-estate-update/user-real-estate-update.component';
import {RealEstateBookingComponent} from './components/user/booking/real-estate-booking/real-estate-booking.component';
import {PaymentComponent} from './components/user/booking/real-estate-booking/payment/payment.component';
import {UsersListComponent} from './components/admin/users-list/users-list.component';
import {SignupComponent} from './components/public/signup/signup.component';
import {SigninComponent} from './components/public/signin/signin.component';
import {RealEstatesListComponent} from './components/admin/real-estates-list/real-estates-list.component';


const routes: Routes = [
  // PUBLIC
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},

  // USER
  {path: 'add-real-estate', component: AddRealEstateComponent},
  {path: 'user-space/user-real-estate-list', component: UserRealEstateListComponent},
  {path: 'user-space/real-estate-update/:id', component: UserRealEstateUpdateComponent},
  {path: 'booking/real-estate-detail/:id', component: RealEstateDetailComponent},
  {path: 'booking/real-estate-booking/:id', component: RealEstateBookingComponent,
    children: [{path: 'payement', component: PaymentComponent}]},

  // ADMIN
  {path: 'users-list', component: UsersListComponent},
  {path: 'realestates-list', component: RealEstatesListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

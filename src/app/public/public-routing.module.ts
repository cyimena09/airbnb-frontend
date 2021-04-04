import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {SigninComponent} from './pages/signin/signin.component';
import {RealEstateLearnMoreComponent} from '../real-estate/pages/real-estate-learn-more/real-estate-learn-more.component';
import {RealEstateBookingComponent} from '../real-estate/pages/real-estate-booking/real-estate-booking.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'real-estate-learn-more/:id', component: RealEstateLearnMoreComponent},
  {path: 'real-estate-booking/:id', component: RealEstateBookingComponent},
  {path: 'not_found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TravelerDetailComponent} from './components/traveler/traveler-detail/traveler-detail.component';
import {RealEstateComponent} from './components/real-estate/real-estate.component';
import {RealEstateDetailComponent} from './components/real-estate/real-estate-detail/real-estate-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'traveler-detail/:id', component: TravelerDetailComponent},
  {path: 'real-estate-detail/:id', component: RealEstateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

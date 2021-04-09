import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealEstateLearnMoreComponent} from './pages/real-estate-learn-more/real-estate-learn-more.component';
import {AddRealEstateComponent} from './pages/add-real-estate/add-real-estate.component';

const routes: Routes = [
  {path: 'add_real_estate', component: AddRealEstateComponent},
  {path: 'real_estate_learn_more/:id', component: RealEstateLearnMoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }

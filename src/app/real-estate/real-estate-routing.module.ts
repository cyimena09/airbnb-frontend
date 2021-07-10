import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListRealEstatesComponent} from './components/list-real-estates/list-real-estates.component';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';
import {PublicSingleRealEstateComponent} from './pages/public-single-real-estate/public-single-real-estate.component';

const routes: Routes = [
  {
    path: 'real_estates',
    component: RealEstateComponent,
    children: [
      {path: '', component: ListRealEstatesComponent},
      {path:':id', component: PublicSingleRealEstateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule {
}

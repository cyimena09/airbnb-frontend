import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';
import {PublicSingleRealEstateComponent} from './pages/public-single-real-estate/public-single-real-estate.component';
import {ListRealEstatesViewComponent} from './components/list-real-estates-view/list-real-estates-view.component';

const routes: Routes = [
  {
    path: 'real_estates',
    component: RealEstateComponent,
    children: [
      {path: '', component: ListRealEstatesViewComponent},
      {path:':id', component: PublicSingleRealEstateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule {
}

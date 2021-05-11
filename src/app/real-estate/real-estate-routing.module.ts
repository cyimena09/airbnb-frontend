import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListRealEstatesComponent} from './components/list-real-estates/list-real-estates.component';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';

const routes: Routes = [
  // {
  //   path: 'real_estates/new',
  //   component: RealEstateFormComponent,
  // },
  // {
  //   path: 'real_estates/:id/update',
  //   component: RealEstateFormComponent,
  // },
  // {
  //   path: 'real_estates/:id',
  //   component: RealEstateViewComponent
  // },
  {
    path: 'real_estates',
    component: RealEstateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule {
}

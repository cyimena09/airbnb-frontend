import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {AddRealEstateComponent} from './pages/add-real-estate/add-real-estate.component';

const routes: Routes = [{
  path: 'user-space', component: UserSpaceComponent,
  children: [
    {path: 'add-real-estate', component: AddRealEstateComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpaceRoutingModule {
}

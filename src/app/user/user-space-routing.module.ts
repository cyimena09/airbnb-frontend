import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {UserComponent} from './pages/user/user.component';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: '', component: UserSpaceComponent},
      {path: 'user_space', component: UserSpaceComponent},
      {path: 'real_estate/:id', component: RealEstateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpaceRoutingModule {
}

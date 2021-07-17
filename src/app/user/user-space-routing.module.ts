import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {UserComponent} from './pages/user/user.component';
import {AccountComponent} from './pages/account/account.component';
import {RealEstateComponent} from './pages/real-estate/real-estate.component';
import {NewRealEstateComponent} from './pages/new-real-estate/new-real-estate.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: '', component: UserSpaceComponent},
      {path: 'account', component: AccountComponent},
      {path: 'real_estates', component: RealEstateComponent},
      {path: 'new_real_estate', component: NewRealEstateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpaceRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './pages/user/user.component';
import {AccountComponent} from './pages/account/account.component';
import {NewRealEstateComponent} from './pages/new-real-estate/new-real-estate.component';
import {PrivateListRealEstatesComponent} from './pages/private-list-real-estates/private-list-real-estates.component';
import {PrivateSingleRealEstateComponent} from './pages/private-single-real-estate/private-single-real-estate.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'real_estates', component: PrivateListRealEstatesComponent},
      {path: 'real_estates/:id', component: PrivateSingleRealEstateComponent},
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

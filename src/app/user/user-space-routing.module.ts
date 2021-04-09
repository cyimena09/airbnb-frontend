import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSpaceComponent} from './pages/user-space/user-space.component';

const routes: Routes = [
  {path: 'user_space', component: UserSpaceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpaceRoutingModule {
}

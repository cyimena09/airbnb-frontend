import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminSpaceComponent} from './pages/admin-space/admin-space.component';
import {UsersListComponent} from './pages/users-list/users-list.component';
import {UserDetailComponent} from './pages/user-detail/user-detail.component';
import {RealEstatesListComponent} from './pages/real-estates-list/real-estates-list.component';
import {RealEstateDetailComponent} from './pages/real-estate-detail/real-estate-detail.component';
import {BookingsListComponent} from './pages/bookings-list/bookings-list.component';

const routes: Routes = [{
  path: 'admin-space',
  component: AdminSpaceComponent,
  children: [
    {path: 'users-list', component: UsersListComponent},
    {path: 'users-list/:id', component: UserDetailComponent},
    {path: 'real-estates-list', component: RealEstatesListComponent},
    {path: 'real-estates-list/:id', component: RealEstateDetailComponent},
    {path: 'bookings-list', component: BookingsListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSpaceRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/pages/not-found/not-found.component';


const routes: Routes = [
  {path: 'not_found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

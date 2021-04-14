import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessengerComponent} from './pages/messenger/messenger.component';
import {WebsocketComponent} from './pages/websocket/websocket.component';

const routes: Routes = [
  {path: 'messenger', component: MessengerComponent},
  {path: 'web', component: WebsocketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }

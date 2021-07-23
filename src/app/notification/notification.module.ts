import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotificationRoutingModule} from './notification-routing.module';
import {VersatileNotifComponent} from './components/versatile-notif/versatile-notif.component';


@NgModule({
  declarations: [VersatileNotifComponent],
  exports: [
    VersatileNotifComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule {
}

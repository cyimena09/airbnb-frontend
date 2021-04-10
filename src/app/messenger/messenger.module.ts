import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import {MessengerComponent} from './pages/messenger/messenger.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MessengerComponent,
    ListMessagesComponent,
  ],
    imports: [
        CommonModule,
        MessengerRoutingModule,
        ReactiveFormsModule
    ]
})
export class MessengerModule { }

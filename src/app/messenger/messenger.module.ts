import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import {MessengerComponent} from './pages/messenger/messenger.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ListConversationComponent } from './components/list-conversation/list-conversation.component';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { DiscussionThreadComponent } from './components/discussion-thread/discussion-thread.component';


@NgModule({
  declarations: [
    MessengerComponent,
    SearchUserComponent,
    ListConversationComponent,
    FormMessageComponent,
    DiscussionThreadComponent,
  ],
    imports: [
        CommonModule,
        MessengerRoutingModule,
        ReactiveFormsModule
    ]
})
export class MessengerModule { }

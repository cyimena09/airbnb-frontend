import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-list-conversation',
  templateUrl: './list-conversation.component.html',
  styleUrls: ['./list-conversation.component.scss']
})
export class ListConversationComponent implements OnInit {

  @Input() conversations;
  @Input() currentUserId;

  @Output('conversationId')
  conversationIdEmitter = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectConversation(id) {
    this.conversationIdEmitter.emit(id) // on indique l'id de la conversation a récupérer
  }

}

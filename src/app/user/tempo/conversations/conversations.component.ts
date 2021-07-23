import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  @Input() conversations;
  @Output() conversationEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onGetConversation(id) {
    this.conversationEmitter.emit(id);
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {SocketService} from '../../services/socket/socket.service';
import {ChatMessageDTO} from '../../../../lib/models/ChatMessageDTO';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit, OnDestroy {

  chatMessages;

  constructor(public webSocketService: SocketService) { }

  ngOnInit(): void {
    this.chatMessages = this.webSocketService.chatMessages;
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy() {
    this.webSocketService.closeWebSocket();
  }

  onSendMessage() {
    let chatMessage = new ChatMessageDTO;
    chatMessage.message = "CECI EST UN MESSAGE"
    chatMessage.user = "Emile"
    this.webSocketService.sendMessage(chatMessage);
  }


}

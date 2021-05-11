import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  webSocket: WebSocket;
  chatMessages

  openWebSocket() {
    this.webSocket = new WebSocket('ws://localhost:8080/chat');
    this.webSocket.onopen = (event) => {
      console.log('Open:', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
      console.log(this.chatMessages)
    };

    this.webSocket.onclose = (event) => {
      console.log('Close', event);
    };
  }

  public sendMessage(message) {
    this.webSocket.send(JSON.stringify(message));
  }

  public closeWebSocket() {
    this.webSocket.close()
  }

}

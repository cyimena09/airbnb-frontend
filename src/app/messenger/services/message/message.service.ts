import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //private apiURL = '/api/v1/messages/';
  private apiURL = '/api/v1/messenger/messages/';


  constructor(private httpClient: HttpClient) {
  }

  addMessage(message) {
    let params = new HttpParams()
      .set('conversationId', message.conversation.id)
    return this.httpClient.post(this.apiURL, message, {params: params});
  }

}

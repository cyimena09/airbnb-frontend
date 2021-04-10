import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  private apiURL = '/api/v1/conversations/';

  constructor(private httpClient: HttpClient) {
  }

  getConversationById(id) {
    return this.httpClient.get(this.apiURL + id)
  }

  createConversation(conversation) {
    console.log('Création d une nouvelle conversation');
    return this.httpClient.post(this.apiURL, conversation);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Cette classe s'occupe uniquement de récupérer les conversations mais sans les messages.
 * Pour récupérer les messages dans une conversation voir la classe MessageService
 */
export class ConversationService {

  private apiURL = '/api/v1/messenger/conversations/';

  constructor(private httpClient: HttpClient) {

  }

  // Récupère toutes les conversations auxquelles l'utilisateur a participé
  getConversationsByUserId(id) {
    return this.httpClient.get(this.apiURL + 'by/participations/' + id);
  }

}

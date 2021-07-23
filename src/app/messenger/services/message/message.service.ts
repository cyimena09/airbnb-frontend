import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {ParticipationService} from '../participation/participation.service';
import {Message} from '../../models/message';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../../../user/models/user';
import {Participation} from '../../models/participation';
import {RealEstate} from '../../../real-estate/models/real-estate';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //currentConversationId; // used when refreshing the discussion thread, especially when we sent a message
  //messageSubject = new Subject(); // defined which messages from which conversation should be displayed

  private apiURL = environment.API_MESSENGER;

  constructor(private participationService: ParticipationService, private httpClient: HttpClient) {
  }

  /**
   * Récupère les messages par participants, il faut au minimum deux participants
   * @param participations
   */
  getMessagesByParticipations(participations: Participation[]) {
    return this.httpClient.post(`${this.apiURL}/by/participations`, participations).pipe(
      map(response => {
        if (response){
          return response['content'] as Message[];
        }
      }));
  }

  /**
   * Récupère tous les messages d'une conversation, chaque message contient un objet conversation
   * @param id
   */
  getMessagesByConversationId(id) {
    return this.httpClient.get(this.apiURL + '/by/conversations/' + id).pipe(
      map(response => {
        if (response) {
          return response['content'] as Message[];
        }
      }));
  }

  //
  // /**
  //  * Emet les messages d'une discussion, écouté par le component discussion thread pour afficher les messages
  //  * @param data
  //  */
  // emitDiscussionThread(data) {
  //   if (data) {
  //     // on récupère la liste des participants de la conversation du premier message (dans tous les message les participants sont les memes)
  //     this.messageSubject.next(data);
  //   } else {
  //     this.messageSubject.next([]);
  //     return null;
  //   }
  // }

  sendMessage(message: Message) {
    return this.httpClient.post(this.apiURL, message);
  }

}

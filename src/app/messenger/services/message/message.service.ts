import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {ParticipationService} from '../participation/participation.service';
import {Message} from '../../models/message';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  currentConversationId; // used when refreshing the discussion thread, especially when we sent a message
  messageSubject = new Subject(); // defined which messages from which conversation should be displayed

  private apiURL = environment.API_MESSENGER;

  constructor(private participationService: ParticipationService, private httpClient: HttpClient) {
  }

  /**
   * Récupère les messages par participants, il faut au minimum deux participants
   * @param participantsIds
   */
  getMessagesByParticipations(participantsIds: Array<number>) {
    // On caste l'array de nombre en string pour pouvoir faire la requête
    let strParticipantsIds = participantsIds as unknown as Array<string>;

    return this.httpClient.get(this.apiURL + 'by/participations', {params: {participantsIds: strParticipantsIds}}).subscribe(
      (data: any) => {

        if (data) {
          this.currentConversationId = data.content[0].conversation.id;
        }

        this.participationService.setParticipantsIds(participantsIds);
        this.emitDiscussionThread(data);
      },
      () => {
        this.currentConversationId = null;
      });
  }

  /**
   * Récupère tous les messages d'une conversation, chaque message contient un objet conversation
   * @param id
   */
  getMessagesByConversationId(id) {
    return this.httpClient.get(this.apiURL + '/by/conversations/' + id);
  }

  /**
   * Emet les messages d'une discussion, écouté par le component discussion thread pour afficher les messages
   * @param data
   */
  emitDiscussionThread(data) {
    if (data) {
      // on récupère la liste des participants de la conversation du premier message (dans tous les message les participants sont les memes)
      this.messageSubject.next(data);
    } else {
      this.messageSubject.next([]);
      return null;
    }
  }

  sendMessage(message: Message) {
    return this.httpClient.post(this.apiURL, message);
  }

}

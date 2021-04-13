import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {ParticipationService} from '../participation/participation.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  currentConversationId; // utilisé lorsqu'on rafraichit le fil de la discussion, notamment lorsqu'on a envoyé un message
  messageSubject = new Subject(); // défini quels messages de quelle conversation doivent etre affiché

  private apiURL = '/api/v1/messenger/messages/';

  constructor(private authService: AuthService, private participationService: ParticipationService, private httpClient: HttpClient) {
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
      }
    );
  }

  /**
   * Récupère tous les messages d'une conversation, chaque message contient un objet conversation
   * @param id
   */
  getMessagesByConversationId(id) {

    return this.httpClient.get(this.apiURL + 'by/conversations/' + id).subscribe(
      (data: any) => {
        this.currentConversationId = id;
        this.emitDiscussionThread(data);
      },
      () => {
        this.currentConversationId = null;
      }
    );
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

  addMessage(message) {

    return this.httpClient.post(this.apiURL, message).subscribe(
      () => {
        if (this.currentConversationId) {
          this.getMessagesByConversationId(this.currentConversationId);
        } else {
          let participants = this.participationService.getParticipantsIds();
          this.getMessagesByParticipations(participants);
        }
      }
    );
  }

}

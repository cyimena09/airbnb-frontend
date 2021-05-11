import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../services/message/message.service';
import {Conversation} from '../../models/conversation';
import {ConversationService} from '../../services/conversation/conversation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {ParticipationService} from '../../services/participation/participation.service';
import {Participation} from '../../models/participation';
import {SocketService} from '../../services/socket/socket.service';
import {catchError, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  currentUserId = this.authService.currentUserId;
  conversations: Conversation[]; // toutes les conversations de la liste
  messages: Message[] = null;

  constructor(
    private messageService: MessageService,
    private socketService: SocketService,
    private formBuilder: FormBuilder,
    private conversationService: ConversationService,
    private participationService: ParticipationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getConversationsByUserId(this.currentUserId);

    // écoute les messages qui doivent être affiché,
    // celle-ci provienne soit de la recherche d'utilisateur pour démarrer une conversation
    // soit de la liste de conversation
    this.messageService.messageSubject.subscribe(
      (data: any) => {
        this.messages = data.content;
        this.getConversationsByUserId(this.currentUserId);
      }
    );
  }

  getConversationsByUserId(id) {
    this.conversationService.getConversationsByUserId(id).subscribe(
      (data: any) => {
        this.conversations = data.content;
      }
    );
  }

  // MESSAGES

  /**
   * Affiche les messages des utilisateurs avec en paramètre un id ou une liste d'ids
   * Cette fonction se déclenche après un clic sur un utilisateur recherché
   * @param ids
   */
  onDisplayThreadByParticipantsIds(ids: Array<number>) {
    ids.push(this.currentUserId); // On ajoute l'utilisateur connecté à la liste des ids

    this.messageService.currentConversationId = null // On met l'id de la précédente conversation à null
    this.messageService.getMessagesByParticipations(ids);
  }

  onDisplayThreadByConvId(id) {
    this.messageService.getMessagesByConversationId(id);
  }

}

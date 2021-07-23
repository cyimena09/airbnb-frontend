import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Conversation} from '../../../messenger/models/conversation';
import {Message} from '../../../messenger/models/message';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {UserService} from '../../services/user/user.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import {MessageService} from '../../../messenger/services/message/message.service';
import {ConversationService} from '../../../messenger/services/conversation/conversation.service';
import {Participation} from '../../../messenger/models/participation';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  conversations: Conversation[] = []; // all conversations of authenticated user
  messages: Message[] = []; // messages of open conversation
  userFromSearch: User[] = []; // search is by firstname. after click on user we open his messages
  private authenticatedUser: User;
  private currentConversation: Conversation = null; // the open conversation
  private currentInterlocutorId: string = null; // participants ids of open conversation except authenticated user
  private topicSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private rxStompService: RxStompService,
    private messageService: MessageService,
    private conversationService: ConversationService) {

  }

  ngOnInit(): void {
    this.authService.authenticatedSubject.subscribe(
      (data: User) => {
        if (data) {
          this.authenticatedUser = data;
          this.getConversationsByUserId(this.authenticatedUser.id);
          this.topicSubscription = this.rxStompService
            .watch(`/user/${this.authenticatedUser.id}/queue/messages`)
            .subscribe((data: any) => {
              console.log('on a recu un message');
              //console.log(data)
              const message: Message = JSON.parse(data.body);
              console.log(message);
              //message.conversation.id = '5'
              // if the message received comes from the open conversation then we add the message to the list and update conversations
              if (this.currentConversation) {
                if (this.currentConversation.id === message.conversation.id) {
                  this.messages.push(message);
                  this.getConversationsByUserId(this.authenticatedUser.id);
                }
              } else {
                this.getConversationsByUserId(this.authenticatedUser.id);
              }
            });
        }
      });
  }

  onSearchUser(firstName) {
    this.userService.getUserByFilter(firstName).subscribe(
      (data: User[]) => {
        this.userFromSearch = data;
      });
  }

  getConversationsByUserId(id) {
    this.conversationService.getConversationsByUserId(id).subscribe(
      (data: Conversation[]) => {
        this.conversations = data;
        console.log(this.conversations)
      });
  }

  /**
   * Triggered when a user has been clicked in the search result.
   * @param interlocutorId
   */
  onGetMessagesByParticipantsIds(interlocutorId) {
    console.log('on a cliqué ');
    console.log(interlocutorId);
    const participations: Participation[] = [];
    participations.push(new Participation(interlocutorId));
    participations.push(new Participation(this.authenticatedUser.id));
    this.currentConversation = null;
    this.messageService.getMessagesByParticipations(participations).subscribe(
      (data: Message[]) => {
        this.currentInterlocutorId = interlocutorId;
        if (data) {
          this.messages = data;
        } else {
          this.messages = [];
        }
      });
  }

  /**
   * Triggered when we clicked on a conversation.
   * @param id
   */
  onGetMessagesByConversationId(id) {
    this.messageService.getMessagesByConversationId(id).subscribe(
      (data: Message[]) => {
        this.messages = data;
        this.currentConversation = this.conversations.find(element => element.id === id);
      });
  }

  // /**
  //  * Affiche les messages des utilisateurs avec en paramètre un id ou une liste d'ids
  //  * Cette fonction se déclenche après un clic sur un utilisateur recherché
  //  * @param ids
  //  */
  // onDisplayThreadByParticipantsIds(ids: Array<number>) {
  //   ids.push(this.currentUserId); // On ajoute l'utilisateur connecté à la liste des ids
  //
  //   this.messageService.currentConversationId = null; // On met l'id de la précédente conversation à null
  //   this.messageService.getMessagesByParticipations(ids);
  // }

  // onDisplayThreadByConvId(id) {
  //   this.messageService.getMessagesByConversationId(id);
  // }

  onSendMessage(text) {
    // todo dont user userfromsearch but user clicked or current user
    if (this.currentInterlocutorId === null && this.currentConversation === null) {
      return;
    }
    // message
    const newMessage = new Message();
    newMessage.senderId = this.authenticatedUser.id;
    newMessage.text = text;
    // add participants in conversation
    if (this.currentConversation === null) {
      this.currentConversation = new Conversation();
      const participants: Participation[] = [];
      participants.push(new Participation(this.currentInterlocutorId));
      participants.push(new Participation(this.authenticatedUser.id));
      this.currentConversation.participations = participants;
    }
    // set conversation on message
    newMessage.conversation = this.currentConversation;

    console.log(newMessage);
    this.messageService.sendMessage(newMessage).subscribe(
      (data: Message) => {
        console.log('ON A RECU DES DATAS')
        console.log(data)
        this.currentConversation = data.conversation;
        this.messages.push(newMessage);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

}

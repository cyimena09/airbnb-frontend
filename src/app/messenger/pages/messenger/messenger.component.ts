import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../services/message/message.service';
import {Conversation} from '../../models/conversation';
import {ConversationService} from '../../services/conversation/conversation.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Subscription} from 'rxjs';
import {User} from '../../../user/models/user';
import {UserService} from '../../../user/services/user/user.service';
import {Participation} from '../../models/participation';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  authenticatedUser: User;
  users: User[] = [];
  conversations: Conversation[] = [];
  currentConversation: Conversation = null; // the open conversation
  receivedMessages: Message[] = [];
  receiverId: string = null;

  private topicSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private rxStompService: RxStompService,
    private messageService: MessageService,
    private conversationService: ConversationService) {

  }

  ngOnInit(): void {
    this.getUsers();

    this.authService.authenticatedSubject.subscribe(
      (data: User) => {
        if (data) {
          this.authenticatedUser = data;
          this.getConversationsByUserId(this.authenticatedUser.id);
          this.topicSubscription = this.rxStompService
            .watch(`/user/${this.authenticatedUser.id}/queue/messages`)
            .subscribe((data: any) => {
              const message: Message = JSON.parse(data.body);
              // if the message received comes from the open conversation then we add the message to the list and update conversations
              if (this.currentConversation.id === message.conversation.id) {
                this.receivedMessages.push(message);
                this.getConversationsByUserId(this.authenticatedUser.id);
              } else {
                this.getConversationsByUserId(this.authenticatedUser.id);
              }
            });
        }
      });
  }

  getConversationsByUserId(id) {
    this.conversationService.getConversationsByUserId(id).subscribe(
      (data: any) => {
        this.conversations = data.content;
      });
  }

  onLoadMessagesByConversationId(id) {
    this.messageService.getMessagesByConversationId(id).subscribe(
      (data: any) => {
        this.receivedMessages = data.content;
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
    if (this.authenticatedUser.id === null) {
      return;
    }
    // message
    const newMessage = new Message();
    newMessage.senderId = this.authenticatedUser.id;
    newMessage.text = text;
    // add participants in conversation
    if (this.currentConversation == null) {
      this.currentConversation = new Conversation();
      const participants: Participation[] = [];
      participants.push(new Participation(this.authenticatedUser.id), new Participation(this.receiverId));
      this.currentConversation.participations = participants;
    }
    // conversation
    newMessage.conversation = this.currentConversation;
    this.messageService.sendMessage(newMessage).subscribe(
      () => {
        this.receivedMessages.push(newMessage);
      });
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data.content;
      });
  }

  onSetReceiver(id) {
    this.receiverId = id;
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

}

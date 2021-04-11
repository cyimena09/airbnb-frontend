import {Component, OnInit} from '@angular/core';
import {Message} from '../../../../lib/models/message';
import {MessageService} from '../../services/message/message.service';
import {Conversation} from '../../../../lib/models/conversation';
import {ConversationService} from '../../services/conversation/conversation.service';
import {ParticipationService} from '../../services/participation/participation.service';
import {Participation} from '../../../../lib/models/participation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  participations: Participation[]
  messages: Message[];
  messageForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private conversationService: ConversationService,
    private participationService: ParticipationService) {
  }

  ngOnInit(): void {
    this.initForm()
    this.getParticipationsByUserId();
    this.getConversationById(4)
   // this.getMessagesToDisplay();
  }

  initForm(): void {
    this.messageForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  onSendMessage() {
    console.log("envoie du message")
    let value = this.messageForm.value;
    let newMessage = new Message();
    newMessage.text = value.text;
    newMessage.senderId = 2;
    let conversation = new Conversation();
    conversation.id = 4;
    newMessage.conversation = conversation;

    this.messageService.addMessage(newMessage).subscribe(
      () => {
        console.log('Le message a bien été envoyé');
        this.getConversationById(4);
      }
    );
  }


  getConversationById(id) {
    this.conversationService.getConversationById(id).subscribe(
      (data: any) => {
        this.messages = data.messages;
      }
    )
  }

  getParticipationsByUserId() {
    this.participationService.getParticipationByUserId().subscribe(
      (data: any) => {
        this.participations = data.content;
        console.log('récupération réussie');
      }
    );
  }



  onCreateConversation() {
    let newConversation = new Conversation();

    this.conversationService.createConversation(newConversation).subscribe(
      () => {
        console.log('Création réussi');
      }
    );
  }

  onCreateParticipation() {
    let newParticipation = new Participation();
    newParticipation.userId = 1;
    let conversation = new Conversation();
    conversation.id = 1;
    newParticipation.conversation = conversation;
    this.participationService.createParticipation(newParticipation).subscribe(
      () => {
        console.log('Création réussi');
      }
    );
  }


}

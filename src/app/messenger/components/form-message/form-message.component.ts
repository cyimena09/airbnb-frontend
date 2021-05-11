import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../services/message/message.service';
import {Message} from '../../models/message';
import {Conversation} from '../../models/conversation';
import {Participation} from '../../models/participation';
import {ParticipationService} from '../../services/participation/participation.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {

  @Input() currentUserId;
  @Input() messages;
  messageForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private participationService: ParticipationService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.messageForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  onSendMessage() {
    let value = this.messageForm.value;
    let newMessage = new Message();
    let conversation = new Conversation();
    newMessage.text = value.text;
    newMessage.senderId = this.currentUserId; // Emile

    // 1. Cas ou il n y a pas de message, on crée une nouvelle conversation avec des participants
    if (this.messages == null) {
      let participationsList: Participation[] = [];
      let participantsIds = this.participationService.getParticipantsIds(); // tableau avec les ids des participants

      // on ajoute les ids des participants dans des objets Participation
      participantsIds.forEach(
        (element) => {
          let participant = new Participation();
          participant.participantId = element;
          participationsList.push(participant);
        }
      );
      // On ajoute la liste de participation dans la conversation et la conversation dans le message
      conversation.participations = participationsList;
      newMessage.conversation = conversation;
    }

    // 2. Qu'il y ait des messages ou pas : on indique la conversation auquelle appartient le message s'il nest pas null
    else {
      conversation.id = this.messageService.currentConversationId;
      newMessage.conversation = conversation;
    }

    // On enregistre le message
    this.messageService.addMessage(newMessage);
  }

}

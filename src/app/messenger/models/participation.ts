import {Conversation} from './conversation';

export class Participation {
  id;
  participantId;
  conversation: Conversation

  constructor(participantId: string) {
    this.participantId = participantId;
  }
}

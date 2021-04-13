import {Message} from './message';
import {Participation} from './participation';

export class Conversation {
  id;
  participations: Participation[]
  messages: Message[]

}

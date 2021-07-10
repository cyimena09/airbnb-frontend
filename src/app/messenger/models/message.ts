import {Conversation} from './conversation';

export class Message {
  id: string;
  senderId: string;
  text: string;
  isGroup: boolean;
  createAt: Date;
  updateAt: Date;
  swDisplay: boolean;
  conversation: Conversation;
}

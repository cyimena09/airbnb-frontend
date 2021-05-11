import {Conversation} from './conversation';

export class Message {
  id
  text;
  createAt;
  updateAt;
  senderId;
  conversation: Conversation
}

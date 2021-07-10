import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const rxStompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://localhost:8081/stomp',
  // Headers
  // Typical keys: login, passcode, host
  // connectHeaders: {
  //   login: 'guest',
  //   passcode: 'guest',
  // },
  heartbeatIncoming: 0, // heartbeat from server to client (disabled)
  heartbeatOutgoing: 20000, // heartbeat from client to server (every 20 seconds)
  reconnectDelay: 200, // wait in milliseconds before attempting auto reconnect
  // debug: (msg: string): void => {
  //   console.log(new Date(), msg);
  // },
};

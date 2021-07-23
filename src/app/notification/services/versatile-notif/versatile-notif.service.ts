import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersatileNotifService {
  notificationModal // target notification modal

  constructor() { }

  notify(message): void {
    this.notificationModal.notify(message);
  }
}

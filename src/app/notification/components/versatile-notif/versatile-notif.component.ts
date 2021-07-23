import {Component, ElementRef, OnInit} from '@angular/core';
import {VersatileNotifService} from '../../services/versatile-notif/versatile-notif.service';

@Component({
  selector: 'app-versatile-notif',
  templateUrl: './versatile-notif.component.html',
  styleUrls: ['./versatile-notif.component.scss']
})
export class VersatileNotifComponent implements OnInit {
  element: any;
  message: string;

  constructor(private notificationService: VersatileNotifService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.notificationService.notificationModal = this;
    this.init(); // position of the modal at initialization
  }

  init() {
    document.body.appendChild(this.element);
    this.element.style.display = 'none';
    this.element.style.position = 'fixed';
    this.element.style.opacity = '0';
    this.element.style.bottom = '-50px';
    this.element.style.right = '20px';
    this.element.style.transition = 'all 200ms';
  }

  /**
   * Manage the animation when you receive a notification.
   * Includes opening and closing notification
   */
  notify(message) {
    this.message = message;
    this.open();
    this.close();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    setTimeout(
      () => {
        this.element.style.opacity = '1';
        this.element.style.bottom = '50px';
      }, 100);
  }

  close() {
    setTimeout(
      () => {
        this.element.style.opacity = '0';
        this.element.style.bottom = '0';
      }, 2000);
  }

}

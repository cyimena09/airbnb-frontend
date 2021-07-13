import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../models/booking';

@Component({
  selector: 'app-list-bookings-view',
  templateUrl: './list-bookings-view.component.html',
  styleUrls: ['./list-bookings-view.component.scss']
})
export class ListBookingsViewComponent implements OnInit {
  @Input() bookings: Booking[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

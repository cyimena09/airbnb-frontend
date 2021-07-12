import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Booking} from '../../models/booking';

@Component({
  selector: 'app-new-booking-view',
  templateUrl: './new-booking-view.component.html',
  styleUrls: ['./new-booking-view.component.scss']
})
export class NewBookingViewComponent implements OnInit {
  bookingForm: FormGroup;

  @Output() bookingEvent = new EventEmitter<Booking>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookingForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onCreateBooking(): void {
    const values = this.bookingForm.value;
    const booking = new Booking();
    const startDate = new Date(values.startDate)
    const endDate = new Date(values.endDate)
    booking.startDate = startDate.toJSON();
    booking.endDate = endDate.toJSON();
    this.bookingEvent.emit(booking);
  }

  get f() {
    return this.bookingForm.controls;
  }

}

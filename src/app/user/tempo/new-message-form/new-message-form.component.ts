import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {
  messageForm: FormGroup;
  @Output() messageEmitter = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.messageForm = this.formBuilder.group({
      text: ['', [Validators.required]],
    });
  }

  onSend(): void {
    const text  = this.messageForm.value.text;
    this.messageEmitter.emit(text)
  }

  get f() {
    return this.messageForm.controls;
  }

}

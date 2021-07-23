import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  searchForm: FormGroup;
  @Output() searchEmitter = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
    });
  }

  onSearch(): void {
    const firstName  = this.searchForm.value.firstName;
    this.searchEmitter.emit(firstName)
  }

  get f() {
    return this.searchForm.controls;
  }

}

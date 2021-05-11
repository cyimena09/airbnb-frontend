import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../../real-estate/models/realEstate';

@Component({
  selector: 'app-user-real-estate',
  templateUrl: './user-real-estate.component.html',
  styleUrls: ['./user-real-estate.component.scss']
})
export class UserRealEstateComponent implements OnInit {

  @Input() realEstate: RealEstate;
  realEstateForm: FormGroup;
  isDisabled: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.realEstateForm = this.formBuilder.group({
      // real estate information
      name: [{value: this.realEstate.name, disabled: true}, Validators.required],
      bedroom: [{value: this.realEstate.bedroom, disabled: true}, Validators.required],
      garden: [{value: this.realEstate.hasGarden, disabled: true}, Validators.required],
      price: [{value: this.realEstate.price, disabled: true}, Validators.required],
      category: [{value: this.realEstate.category, disabled: true}, Validators.required],
      // real estate address
      street: [{value: this.realEstate.address.street, disabled: true}, Validators.required],
      streetNumber: [{value: this.realEstate.address.streetNumber, disabled: true}, Validators.required],
      city: [{value: this.realEstate.address.city, disabled: true}, Validators.required],
      postalCode: [{value: this.realEstate.address.postalCode, disabled: true}, Validators.required],
      country: [{value: this.realEstate.address.country, disabled: true}, Validators.required],
    });
  }

  onSwitchActivation() {
    let status = this.realEstateForm.status;

    if (status == 'DISABLED') {
      this.realEstateForm.enable();
    } else {
      this.realEstateForm.disable();
    }
  }


  onUpdate() {

  }

}

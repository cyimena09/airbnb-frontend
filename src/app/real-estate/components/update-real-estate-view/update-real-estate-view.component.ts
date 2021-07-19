import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/real-estate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-real-estate-view',
  templateUrl: './update-real-estate-view.component.html',
  styleUrls: ['./update-real-estate-view.component.scss']
})
export class UpdateRealEstateViewComponent implements OnInit {
  realEstateForm: FormGroup;
  @Input() realEstate: RealEstate

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    setTimeout(
      () => {
        this.setValue();
      },2000
    )
  }

  initForm(): void {
    this.realEstateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      bedroom: ['', [Validators.required]],
      hasGarden: ['', [Validators.required]],
      hasPool: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // address
      street: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      boxNumber: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  setValue() {
    this.realEstateForm.setValue({
      name: this.realEstate.name,
      bedroom: this.realEstate.bedroom,
      hasGarden: this.realEstate.hasGarden,
      hasPool: this.realEstate.hasPool,
      price: this.realEstate.price,
      description: this.realEstate.description,
      // address
      street: this.realEstate.address.street,
      streetNumber: this.realEstate.address.streetNumber,
      boxNumber: this.realEstate.address.boxNumber,
      postalCode: this.realEstate.address.postalCode,
      city: this.realEstate.address.city,
      country: this.realEstate.address.country,
    });
  }

  onUpdate(): void {
    const values = this.realEstateForm.value;
    console.log(values)

  }

  get f() {
    return this.realEstateForm.controls;
  }

}

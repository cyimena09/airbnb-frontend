import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../../../lib/models/real-estate';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.scss']
})
export class AddRealEstateComponent implements OnInit {
  loading = false;
  realEstateForm: FormGroup;

  constructor(private realEstateService: RealEstateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.realEstateForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      bedroom: ['', Validators.required],
      garden: ['', Validators.required],
      price: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onCreateRE(){
    this.loading = true;
    let newRE = new RealEstate();

    newRE.name = this.realEstateForm.value.name;
    newRE.type = this.realEstateForm.value.type;
    newRE.description = this.realEstateForm.value.description;
    newRE.bedroom = this.realEstateForm.value.bedroom;
    newRE.garden = this.realEstateForm.value.garden;
    newRE.price = this.realEstateForm.value.price;
    newRE.address.street = this.realEstateForm.value.street;
    newRE.address.streetNumber = this.realEstateForm.value.streetNumber;
    newRE.address.postalCode = this.realEstateForm.value.postalCode;
    newRE.address.city = this.realEstateForm.value.city;
    newRE.address.country = this.realEstateForm.value.country

    this.realEstateService.createRealEstate(newRE).subscribe(
      () => {
        console.log("Le bien a été créé")
        this.loading = false;
      },
      (message) => {
        console.log(message.error);
        this.loading = false;
      });
  }

  get f() {
    return this.realEstateForm.controls;
  }

}

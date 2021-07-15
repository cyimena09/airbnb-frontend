import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {Address} from '../../../shared/models/address';
import {User} from '../../../user/models/user';
import {RealEstate} from '../../models/real-estate';
import {CategoryEnum} from '../../models/category-enum';
import {TypeEnum} from '../../models/type-enum';

@Component({
  selector: 'app-create-real-estate-view',
  templateUrl: './create-real-estate-view.component.html',
  styleUrls: ['./create-real-estate-view.component.scss']
})
export class CreateRealEstateViewComponent implements OnInit {
  loading = false;
  realEstateForm: FormGroup;

  constructor(private realEstateService: RealEstateService, private formBuilder: FormBuilder) {
  }

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

  onCreateRE() {
    this.loading = true;
    let formValue = this.realEstateForm.value;

    // newRE.name = formValue.name;
    // newRE.type = formValue.type;
    // newRE.description = formValue.description;
    // newRE.bedroom = formValue.bedroom;
    // newRE.garden = formValue.garden;
    // newRE.price = formValue.price;
    // newRE.address.street = formValue.street;
    // newRE.address.streetNumber = formValue.streetNumber;
    // newRE.address.postalCode = formValue.postalCode;
    // newRE.address.city = formValue.city;
    // newRE.address.country = formValue.country;

    // Real Estate
    let newRE = new RealEstate();
    newRE.name = 'Villa Massaï';
    newRE.category.name = CategoryEnum.LOCATION;
    newRE.type.name = TypeEnum.APARTMENT;
    newRE.description = 'Villa luxueux et spacieux située au bord du lac kivu';
    newRE.bedroom = 5;
    newRE.hasGarden = true;
    newRE.price = 350;
    // Address
    let address = new Address();
    address.street = 'Rue du lac kivu';
    address.streetNumber = '18';
    address.postalCode = '1301';
    address.city = 'Kigali';
    address.country = 'Rwanda';
    // User
    let user = new User();
    user.id = '1';
    // Add address & user in real estate
    newRE.address = address;
    newRE.user = user;

    this.realEstateService.createRealEstate(newRE).subscribe(
      () => {
        console.log('Le logement à bien été ajouté !');
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

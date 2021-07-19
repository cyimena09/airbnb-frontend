import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../models/real-estate';
import {CategoryEnum} from '../../models/category-enum';
import {TypeEnum} from '../../models/type-enum';
import {Address} from '../../../shared/models/address';
import {Category} from '../../models/category';
import {Type} from '../../models/type';

@Component({
  selector: 'app-new-real-estate-view',
  templateUrl: './new-real-estate-view.component.html',
  styleUrls: ['./new-real-estate-view.component.scss']
})
export class NewRealEstateViewComponent implements OnInit {
  realEstateForm: FormGroup;

  @Output() realEstateEmitter = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
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
    const formValue = this.realEstateForm.value;
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
    const newRE = new RealEstate();
    newRE.name = 'Emile House 5';
    newRE.description = 'Villa luxueux et spacieux située au bord du lac kivu';
    newRE.bedroom = 5;
    newRE.hasGarden = true;
    newRE.hasPool = true;
    newRE.price = 350;
    // Category
    const newCategory = new Category();
    newCategory.name = CategoryEnum.LOCATION;
    newRE.category = newCategory;
    // Type
    const newType = new Type();
    newType.name = TypeEnum.APARTMENT;
    newRE.type = newType;
    // Address
    const address = new Address();
    address.street = 'Rue du lac kivu';
    address.streetNumber = '18';
    address.postalCode = '1301';
    address.city = 'Kigali';
    address.country = 'Rwanda';
    newRE.address = address;
    this.realEstateEmitter.emit(newRE);
  }

  get f() {
    return this.realEstateForm.controls;
  }

}

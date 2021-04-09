import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../../../lib/models/real-estate';
import {Address} from '../../../../lib/models/address';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.scss']
})
export class AddRealEstateComponent implements OnInit {
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
    newRE.type = 'Villa';
    newRE.description = 'Villa luxueux et spacieux située au bord du lac kivu';
    newRE.bedroom = 5;
    newRE.garden = true;
    newRE.price = 350;
    // Address
    let address = new Address();
    address.street = 'Rue du lac kivu';
    address.streetNumber = '18';
    address.postalCode = '1301';
    address.city = 'Kigali';
    address.country = 'Rwanda';
    // Add address in real estate
    newRE.address = address;

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

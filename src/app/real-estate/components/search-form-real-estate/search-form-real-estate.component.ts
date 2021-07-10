import {Component, OnInit} from '@angular/core';
import {RealEstate} from '../../models/realEstate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstateService} from '../../services/real-estate/real-estate.service';

@Component({
  selector: 'app-search-form-real-estate',
  templateUrl: './search-form-real-estate.component.html',
  styleUrls: ['./search-form-real-estate.component.scss']
})
export class SearchFormRealEstateComponent implements OnInit {

  realEstates: RealEstate[] = [];
  loading = false;
  catalogForm: FormGroup;

  constructor(
    private realEstateService: RealEstateService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.catalogForm = this.formBuilder.group({
      category: ['', Validators.required],
      type: ['', Validators.required],
      minBedroom: ['', Validators.required],
      maxBedroom: ['', Validators.required],
      minPrice: ['', Validators.required],
      maxPrice: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      minDate: ['', Validators.required],
      maxDate: ['', Validators.required],
    });
  }

  onSearch() {
    // warning, search is case sensitive
    let formValue = this.catalogForm.value;
    let type = formValue.type;
    let bedroom = formValue.bedroom;
    let price = formValue.price;
    let country = formValue.country;
    let city = formValue.city;
    // let startDate = formValue.startDate;
    // let endDate = formValue.endDate;

    this.realEstateService.searchRealEstate(type, bedroom, price, country, city).subscribe(
      (data: any) => {
        this.realEstates = data.content;
      },
      (error) => {
        console.log(error);
      });
  }

  get f() {
    return this.catalogForm.controls;
  }


}

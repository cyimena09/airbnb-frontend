import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {RealEstate} from '../../../../lib/models/real-estate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  realEstates: [RealEstate];
  loading = false;
  catalogForm: FormGroup;

  constructor(private realEstateService: RealEstateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    //this.getRealEstates();
  }

  initForm(): void {
    this.catalogForm = this.formBuilder.group({
      type: ['', Validators.required],
      bedroom: ['', Validators.required],
      price: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  getRealEstates(){
    this.realEstateService.getRealEstates().subscribe(
      (data: any) => {
        this.realEstates = data.content;
      },
      () => {
        console.log("Une erreur est survenue")
      });
  }

  onSearch(){
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
        console.log(error)
      });
  }

  get f() {
    return this.catalogForm.controls;
  }

}

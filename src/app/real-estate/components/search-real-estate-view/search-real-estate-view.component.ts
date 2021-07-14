import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RealEstate} from '../../models/realEstate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-real-estate-view',
  templateUrl: './search-real-estate-view.component.html',
  styleUrls: ['./search-real-estate-view.component.scss']
})
export class SearchRealEstateViewComponent implements OnInit {
  realEstates: RealEstate[] = [];
  loading = false;
  filterForm: FormGroup;

  @Output() filterEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.filterForm = this.formBuilder.group({
      category: ['xxx', Validators.required],
      type: ['', Validators.required],
      minBedroom: ['', Validators.required],
      maxBedroom: ['', Validators.required],
      minPrice: ['', Validators.required],
      maxPrice: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSearch() {
    // !! warning, search is case sensitive !!
    const formValue = this.filterForm.value;
    const category = formValue.category;
    const type = formValue.type;
    const minBedroom = formValue.minBedroom;
    const maxBedroom = formValue.maxBedroom;
    const minPrice = formValue.minPrice;
    const maxPrice = formValue.maxPrice;
    const country = formValue.country;
    const city = formValue.city;
    const startDate = formValue.startDate;
    const endDate = formValue.endDate;

    const filter = {
      category: category,
      type: type,
      minBedroom: minBedroom,
      maxBedroom: maxBedroom,
      minPrice: minPrice,
      maxPrice: maxPrice,
      country: country,
      city: city,
      startDate: startDate,
      endDate: endDate
    };
    this.filterEvent.emit(filter);
  }

  get f() {
    return this.filterForm.controls;
  }


}

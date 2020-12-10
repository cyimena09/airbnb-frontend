import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../services/real-estate/real-estate.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../../models/RealEstate';

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.scss']
})
export class RealEstateDetailComponent implements OnInit {
  realEstate: any = {};
  realEstateForm: FormGroup;
  locationForm: FormGroup;
  loading = false;
  id = this.activatedRoute.snapshot.params['id'];

  constructor(
    private realEstateService: RealEstateService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm()
    this.getRealEstate();
  }

  initForm(): void {
    this.realEstateForm = this.formBuilder.group({
      label: [this.realEstate.label, Validators.required],
      price: [this.realEstate.price, Validators.required]
    });
  }

  onUpdateRealEstate(): void {
    this.loading = true;
    const newRealEstate = new RealEstate();
    newRealEstate.label = this.realEstateForm.value.label;
    newRealEstate.price = this.realEstateForm.value.price;

    this.realEstateService.updateRealEstate(this.id, newRealEstate).subscribe(
      () => {
        this.loading = false;
        },
      () => {
        this.loading = false;
      });
  }

  getRealEstate() {
    return this.realEstateService.getRealEstate(this.id).subscribe(
      (data) => {
        this.realEstate = data;
        this.initForm();
      });
  }

  onRent() {

  }
}

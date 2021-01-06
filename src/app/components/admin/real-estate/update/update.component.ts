import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  realEstate: any = {};
  realEstateForm: FormGroup;
  locationForm: FormGroup;
  loading = false;
  //id = this.activatedRoute.snapshot.params['id'];

  // constructor(
  //   private realEstateService: RealEstateService,
  //   private activatedRoute: ActivatedRoute,
  //   private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    // this.initForm()
    // this.getRealEstate();
  }

  // initForm(): void {
  //   this.realEstateForm = this.formBuilder.group({
  //     label: [this.realEstate.label, Validators.required],
  //     price: [this.realEstate.price, Validators.required]
  //   });
  // }
  //
  // onUpdateRealEstate(): void {
  //   this.loading = true;
  //   const newRealEstate = new RealEstate();
  //   newRealEstate.label = this.realEstateForm.value.label;
  //   newRealEstate.price = this.realEstateForm.value.price;
  //
  //   this.realEstateService.updateRealEstate(this.id, newRealEstate).subscribe(
  //     () => {
  //       this.loading = false;
  //       },
  //     () => {
  //       this.loading = false;
  //     });
  // }
  //
  // getRealEstate() {
  //   return this.realEstateService.getRealEstate(this.id).subscribe(
  //     (data) => {
  //       this.realEstate = data;
  //       this.initForm();
  //     });
  // }
  //
  // onRent() {
  //
  // }

}

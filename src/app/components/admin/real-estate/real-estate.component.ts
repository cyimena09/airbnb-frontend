import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstateService} from '../../../services/real-estate/real-estate.service';
import {RealEstate} from '../../../models/RealEstate';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {


  // realEstates;
  // loading = false;
  // realEstateForm: FormGroup;
  //
  // constructor(private realEstateService: RealEstateService, private formBuilder: FormBuilder) { }
  //
ngOnInit(): void {
  //   this.realEstateService.getRealEstates().subscribe(
  //     (data: any) => {
  //       this.realEstates = data.content;
  //     });
  //
  //   this.initForm();
}
  //
  // initForm(): void {
  //   this.realEstateForm = this.formBuilder.group({
  //     label: ['', Validators.required],
  //     price: ['', Validators.required],
  //   });
  // }
  //
  // onCreateRealEstate(): void {
  //   this.loading = true;
  //   const newRealEstate = new RealEstate();
  //   newRealEstate.label = this.realEstateForm.value.label;
  //   this.realEstateService.createRealEstate(newRealEstate).subscribe(
  //     () => {
  //       this.loading = false;
  //       },
  //     () => {
  //       this.loading = false; }
  //     );
  // }
  //
  // onDeleteRealEstate(id){
  //   return this.realEstateService.deleteRealEstate(id).subscribe()
  // }
  //
  // get f() {
  //   return this.realEstateForm.controls;
  // }

}

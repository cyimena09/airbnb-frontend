import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TravelerService} from '../../../services/traveler/traveler.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Traveler} from '../../../models/Traveler';

@Component({
  selector: 'app-traveler-detail',
  templateUrl: './traveler-detail.component.html',
  styleUrls: ['./traveler-detail.component.scss']
})
export class TravelerDetailComponent implements OnInit {
  traveler: any = {};
  travelerForm: FormGroup;
  loading = false;
  id = this.activatedRoute.snapshot.params['id'];

  constructor(private travelerService: TravelerService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm()
    this.getTraveler();
  }

  getTraveler(){
    return this.travelerService.getTraveler(this.id).subscribe(
      (data: any) => {
        this.traveler = data;
        this.initForm();
      }
    )
  }

  initForm(): void {
    this.travelerForm = this.formBuilder.group({
      firstName: [this.traveler.firstName, Validators.required],
      lastName: [this.traveler.lastName, Validators.required]
    });
  }

  onUpdateTraveler(): void {
    this.loading = true;
    const newTraveler = new Traveler();
    newTraveler.firstName = this.travelerForm.value.firstName;
    newTraveler.lastName = this.travelerForm.value.lastName;


    this.travelerService.updateTraveler(this.id, newTraveler).subscribe(
      () => {
        this.loading = false;
        },
      () => {
        this.loading = false; }
      );
  }



}

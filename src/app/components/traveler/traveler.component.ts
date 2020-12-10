import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TravelerService} from '../../services/traveler/traveler.service';
import {Traveler} from '../../models/Traveler';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.scss']
})
export class TravelerComponent implements OnInit {

 travelers;
  loading = false;
  travelerForm: FormGroup;

  constructor(private travelerService: TravelerService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.travelerService.getTravelers().subscribe(
      (data: any) => {
        this.travelers = data.content;
      });

    this.initForm();
  }

  initForm(): void {
    this.travelerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onCreateTraveler(): void {
    this.loading = true;
    const newTraveler = new Traveler();
    newTraveler.firstName = this.travelerForm.value.firstName;
    newTraveler.lastName = this.travelerForm.value.lastName;


    this.travelerService.createTraveler(newTraveler).subscribe(
      () => {
        this.loading = false;
        },
      () => {
        this.loading = false; }
      );
  }

  onDeleteTraveler(id){
    this.travelerService.deleteTraveler(id).subscribe();
  }

  get f() {
    return this.travelerForm.controls;
  }

}

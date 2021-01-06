import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.scss']
})
export class TravelerComponent implements OnInit {

 travelers;
  loading = false;
  travelerForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.travelers = data.content;
      });

    //this.initForm();
  }

  initForm(): void {
    this.travelerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onCreateTraveler(): void {
    this.loading = true;
    const newTraveler = new User();
    newTraveler.firstName = this.travelerForm.value.firstName;
    newTraveler.lastName = this.travelerForm.value.lastName;

    this.userService.createUser(newTraveler).subscribe(
      () => {
        this.loading = false;
        },
      () => {
        this.loading = false; }
      );
  }

  onDeleteTraveler(id){
    this.userService.deleteUser(id).subscribe();
  }

  // get f() {
  //   return this.travelerForm.controls;
  // }

}

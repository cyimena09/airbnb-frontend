import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onCreateUser(){
    let newUser = new User();
    newUser.firstName = "Amaury";
    newUser.lastName = "Cyemezo";
    this.userService.createUser(newUser).subscribe(
      () => {console.log("L'utilisateur a été créé !")}
    );
  }

}

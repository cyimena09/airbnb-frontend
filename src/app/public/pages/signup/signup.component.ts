import { Component, OnInit } from '@angular/core';
import {User} from '../../../../lib/models/user';
import {UserService} from '../../services/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading = false;
  signUpForm: FormGroup;

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
    this.loading = true;
    let newUser = new User();

    newUser.firstName = this.signUpForm.value.firstName;
    newUser.lastName = this.signUpForm.value.lastName;
    newUser.birthDate = this.signUpForm.value.birthDate;
    newUser.email = this.signUpForm.value.email;
    newUser.password = this.signUpForm.value.password;
    newUser.phoneNumber = this.signUpForm.value.phoneNumber;
    newUser.address.street = this.signUpForm.value.street;
    newUser.address.streetNumber = this.signUpForm.value.streetNumber;
    newUser.address.postalCode = this.signUpForm.value.postalCode;
    newUser.address.country = this.signUpForm.value.country;
    newUser.address.city = this.signUpForm.value.city;

    this.userService.createUser(newUser).subscribe(
      () => {
        console.log("L'utilisateur a été créé !");
        this.loading = true;
        }, () => {
        this.loading = true;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user/services/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../user/models/user';
import {Address} from '../../../shared/models/address';

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
      mailBox: [''],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onCreateUser(){
    this.loading = true;
    let newUser = new User();
    //let formValue =  this.signUpForm.value
    // newUser.firstName = formValue.firstName;
    // newUser.lastName = formValue.lastName;
    // newUser.birthDate = formValue.birthDate;
    // newUser.email = formValue.email;
    // newUser.password = formValue.password;
    // newUser.phoneNumber = formValue.phoneNumber;
    // // Address
    // let address = new Address();
    // newUser.address.street = formValue.street;
    // newUser.address.streetNumber = formValue.streetNumber;
    // newUser.address.postalCode = formValue.postalCode;
    // newUser.address.country = formValue.country;
    // newUser.address.city = formValue.city;

    newUser.firstName = "Mike";
    newUser.lastName = "Cyamukungu";
    newUser.birthDate = "1995-10-08";
    newUser.email = "amaury032@hotmail.com";
    newUser.password = "Emiliano--032";
    newUser.phoneNumber = "0484090853";
    // Address
    let address = new Address();
    address.street = "Rue de la source";
    address.streetNumber = "18"
    address.postalCode = "1301";
    address.country = "Belgique";
    address.city = "Louvain-la-Neuve";

    newUser.address = address;


    this.userService.createUser(newUser).subscribe(
      () => {
        console.log("L'utilisateur a été créé !");
        this.loading = true;
        }, () => {
        this.loading = true;
      });
  }

}

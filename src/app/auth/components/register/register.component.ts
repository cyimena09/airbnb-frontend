import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from 'src/app/user/services/user/user.service';
import {PersonalValidator} from '../../../../utils/personal-validator';
import {User} from '../../../user/models/user';
import {Address} from '../../../shared/models/address';
import {Account} from '../../../user/models/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.formBuilder.group({
      // user
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', PersonalValidator.number],
      birthDate: ['', PersonalValidator.number],
      // address
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      // account
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(7)]
    });
  }

  onCreateUser(): void {
    const values = this.registerForm.value;
    // user
    const newUser = new User();
    newUser.firstName = values.firstName;
    newUser.lastName = values.lastName;
    newUser.phoneNumber = values.phoneNumber;
    newUser.birthDate = values.birthDate;
    // address
    const address = new Address();
    address.street = values.street;
    address.streetNumber = values.streetNumber;
    address.postalCode = values.postalCode;
    address.city = values.city;
    address.country = values.country;
    // account
    const account = new Account();
    account.email = values.email.trim();
    account.password = values.password;
    // affectations
    newUser.address = address;
    newUser.account = account;

    this.userService.createUser(newUser).subscribe();
  }

  get f() {
    return this.registerForm.controls;
  }

}

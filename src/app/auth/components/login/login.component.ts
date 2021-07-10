import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../user/services/user/user.service';
import {PersonalValidator} from '../../../../utils/personal-validator';
import {User} from '../../../user/models/user';
import {Address} from '../../../shared/models/address';
import {Account} from '../../../user/models/account';
import {AuthService} from '../../services/auth/auth.service';
import {Login} from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(7)]
    });
  }

  onLogin(): void {
    let values = this.loginForm.value;
    const login = new Login();
    login.email = values.email.trim();
    login.password = values.password;



    this.authService.login(login);
  }

  get f() {
    return this.loginForm.controls;
  }

}

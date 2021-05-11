import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SignupComponent} from './pages/signup/signup.component';
import {SigninComponent} from './pages/signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormEmailPassComponent } from './components/form-email-pass/form-email-pass.component';
import { FormPersonalsInfosComponent } from './components/form-personals-infos/form-personals-infos.component';
//import { AuthGuardComponent } from './guard/auth-guard/auth-guard.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    FormEmailPassComponent,
    FormPersonalsInfosComponent,
    //AuthGuardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        RegisterPageComponent,
        LoginPageComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }

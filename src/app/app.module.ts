import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { TravelerComponent } from './components/traveler/traveler.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { TravelerDetailComponent } from './components/traveler/traveler-detail/traveler-detail.component';
import { RealEstateDetailComponent } from './components/real-estate/real-estate-detail/real-estate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelerComponent,
    RealEstateComponent,
    TravelerDetailComponent,
    RealEstateDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

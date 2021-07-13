import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {RealEstateModule} from '../real-estate/real-estate.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import {AuthModule} from '../auth/auth.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
  ],
    imports: [
        CommonModule,
        RealEstateModule,
        HomeRoutingModule,
        AuthModule,
        SharedModule,
    ]
})
export class HomeModule {
}

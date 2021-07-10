import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
    exports: [
        HeaderComponent,
        MenuComponent,
        NotFoundComponent,
        FooterComponent
    ]
})
export class SharedModule {
}

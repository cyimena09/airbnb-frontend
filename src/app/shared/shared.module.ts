import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SortViewComponent } from './components/sort-view/sort-view.component';
import { RatingViewComponent } from './components/rating-view/rating-view.component';
import { PaginationViewComponent } from './components/pagination-view/pagination-view.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SortViewComponent,
    RatingViewComponent,
    PaginationViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    NotFoundComponent,
    FooterComponent,
    SortViewComponent,
    PaginationViewComponent
  ]
})
export class SharedModule {
}

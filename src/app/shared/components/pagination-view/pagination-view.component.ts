import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-view',
  templateUrl: './pagination-view.component.html',
  styleUrls: ['./pagination-view.component.scss']
})
export class PaginationViewComponent implements OnInit {

  @Input() pages: number[] = [];
  @Input() currentPage: number;
  @Output() pageEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  changePage(numberPage: number): void {
    this.pageEvent.emit(numberPage);
  }

  nextPage(): void {
    this.pageEvent.emit('next');

    // const newCurrentPage = this.currentPage + 1;
    // const prod = this.prodService.getProductByPage(newCurrentPage);
    // if (prod.length) {
    //   this.products = prod;
    //   this.currentPage = newCurrentPage;
    //}

  }

  prevPage(): void {
    this.pageEvent.emit('previous');
    //console.log('previous');
    //   const newCurrentPage = this.currentPage - 1;
    //   const prod = this.prodService.getProductByPage(newCurrentPage);
    //   if (prod.length) {
    //     this.products = prod;
    //     this.currentPage = newCurrentPage;
    //   }
  }
}

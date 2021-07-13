import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  @Output() sortEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSort(toSort, isAsc: boolean = true) {
    const parameter = {
      toSort :toSort,
      isAsc: isAsc
    }
    this.sortEvent.emit(parameter);
  }

}

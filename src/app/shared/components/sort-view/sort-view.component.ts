import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  @Input() currentSort: string;
  @Output() sortEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSort(toSort, order: string = 'asc', isStrict: boolean = false) {
    const parameter = {
      toSort: toSort,
      order: order,
      isStrict: isStrict
    };
    this.sortEvent.emit(parameter);
  }

}

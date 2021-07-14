import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DiversConstant} from '../../models/diversConstant';
import {RealEstateConstant} from '../../../real-estate/models/realEstateConstant';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {
  asc = DiversConstant.DESC;
  desc = DiversConstant.DESC;
  price = RealEstateConstant.PRICE;
  rating = RealEstateConstant.RATING;
  popularity = RealEstateConstant.POPULARITY;
  bedroom = RealEstateConstant.BEDROOM;

  @Input() currentSort: string;
  @Output() sortEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSort(toSort, order: string = this.asc, isStrict: boolean = false) {
    const parameter = {
      toSort: toSort,
      order: order,
      isStrict: isStrict
    };
    this.sortEvent.emit(parameter);
  }

}

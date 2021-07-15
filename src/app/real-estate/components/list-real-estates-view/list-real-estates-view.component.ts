import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/real-estate';

@Component({
  selector: 'app-list-real-estates-view',
  templateUrl: './list-real-estates-view.component.html',
  styleUrls: ['./list-real-estates-view.component.scss']
})
export class ListRealEstatesViewComponent implements OnInit {

  @Input() realEstates: RealEstate[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

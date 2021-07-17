import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/real-estate';

@Component({
  selector: 'app-private-list-real-estates-view',
  templateUrl: './private-list-real-estates-view.component.html',
  styleUrls: ['./private-list-real-estates-view.component.scss']
})
export class PrivateListRealEstatesViewComponent implements OnInit {
  @Input() realEstates: RealEstate[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

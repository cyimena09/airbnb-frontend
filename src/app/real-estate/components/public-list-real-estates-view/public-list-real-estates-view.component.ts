import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/real-estate';

@Component({
  selector: 'app-public-list-real-estates-view',
  templateUrl: './public-list-real-estates-view.component.html',
  styleUrls: ['./public-list-real-estates-view.component.scss']
})
export class PublicListRealEstatesViewComponent implements OnInit {

  @Input() realEstates: RealEstate[];

  constructor() { }

  ngOnInit(): void {
  }

}

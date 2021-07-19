import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/real-estate';

@Component({
  selector: 'app-browse-real-estate-view',
  templateUrl: './browse-real-estate-view.component.html',
  styleUrls: ['./browse-real-estate-view.component.scss']
})
export class BrowseRealEstateViewComponent implements OnInit {
  @Input() realEstates: RealEstate[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

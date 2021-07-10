import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/realEstate';

@Component({
  selector: 'app-public-single-real-estate-view',
  templateUrl: './public-single-real-estate-view.component.html',
  styleUrls: ['./public-single-real-estate-view.component.scss']
})
export class PublicSingleRealEstateViewComponent implements OnInit {
  @Input() realEstate: RealEstate;

  constructor() { }

  ngOnInit(): void {
  }

}

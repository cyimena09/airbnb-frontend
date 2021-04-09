import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../../../lib/models/real-estate';

@Component({
  selector: 'app-single-real-estate',
  templateUrl: './single-real-estate.component.html',
  styleUrls: ['./single-real-estate.component.scss']
})
export class SingleRealEstateComponent implements OnInit {

  @Input() realEstate: RealEstate;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {RealEstate} from '../../../real-estate/models/real-estate';

@Component({
  selector: 'app-see-later',
  templateUrl: './see-later.component.html',
  styleUrls: ['./see-later.component.scss']
})
export class SeeLaterComponent implements OnInit {
  realEstates: RealEstate[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

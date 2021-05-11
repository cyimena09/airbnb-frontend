import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../../real-estate/models/realEstate';

@Component({
  selector: 'app-user-real-estates-list',
  templateUrl: './user-real-estates-list.component.html',
  styleUrls: ['./user-real-estates-list.component.scss']
})
export class UserRealEstatesListComponent implements OnInit {

  @Input() userRES: RealEstate[];

  constructor() { }

  ngOnInit(): void {
  }

}

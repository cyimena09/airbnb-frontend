import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../../../lib/models/real-estate';

@Component({
  selector: 'app-list-real-estates',
  templateUrl: './list-real-estates.component.html',
  styleUrls: ['./list-real-estates.component.scss']
})
export class ListRealEstatesComponent implements OnInit {

  @Input() realEstates: RealEstate[];

  constructor() { }

  ngOnInit(): void {
  }

}
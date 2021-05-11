import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {RealEstate} from '../../../real-estate/models/realEstate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) {
  }

  ngOnInit() {
    this.realEstateService.getRealEstates().subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
      }
    );
  }

}

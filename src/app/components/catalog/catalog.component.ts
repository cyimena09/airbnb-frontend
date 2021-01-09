import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {RealEstate} from '../../models/RealEstate';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  realEstates: [RealEstate];

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.getRealEstates();
  }

  getRealEstates(){
    this.realEstateService.getRealEstates().subscribe(
      (data: any) => {
        this.realEstates = data.content;
      },
      (error) => {console.log("Une erreur est survenue", error)}
    )
  }

}

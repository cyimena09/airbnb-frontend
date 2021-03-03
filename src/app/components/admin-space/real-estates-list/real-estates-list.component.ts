import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../services/real-estate/real-estate.service';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.scss']
})
export class RealEstatesListComponent implements OnInit {
  realestates
  bookings;

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.getRealEstates();
  }

  getRealEstates(){
    this.realEstateService.getRealEstates().subscribe(
      (data: any) => {
        this.realestates = data.content;
      },
      () => {console.log("Une erreur est survenue");
      });
  }

  onDeleteRealEstate(id){
    this.realEstateService.deleteRealEstate(id).subscribe(
      () => {console.log("real estate deleted")}
    )
  }

}

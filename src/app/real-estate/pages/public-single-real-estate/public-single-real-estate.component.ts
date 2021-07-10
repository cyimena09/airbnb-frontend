import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/realEstate';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-single-real-estate',
  templateUrl: './public-single-real-estate.component.html',
  styleUrls: ['./public-single-real-estate.component.scss']
})
export class PublicSingleRealEstateComponent implements OnInit {
  realEstateId = this.route.snapshot.params['id'];
  realEstate: RealEstate;

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.realEstateService.getRealEstateById(this.realEstateId).subscribe(
      (data: RealEstate) => {
        this.realEstate = data;
      });
  }

}

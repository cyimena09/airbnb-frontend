import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {

  id;
  realEstate;

  constructor(private activatedRoute: ActivatedRoute, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRealEstateById();
  }

  getRealEstateById() {
    this.realEstateService.getRealEstateById(this.id).subscribe(
      (data) => {
        this.realEstate = data;
      }
    );
  }

}

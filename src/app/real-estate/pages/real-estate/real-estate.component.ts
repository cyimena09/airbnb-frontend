import {Component, OnDestroy, OnInit} from '@angular/core';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {Subscription} from 'rxjs';
import {RealEstate} from '../../models/realEstate';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit, OnDestroy {
  realEstate: RealEstate[] = [];
  realEstateSub: Subscription;

  constructor(private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.realEstateSub = this.realEstateService.getRealEstates().subscribe(
      (data: RealEstate[]) => {
        this.realEstate = data;
      }
    );
  }

  ngOnDestroy() {
    this.realEstateSub.unsubscribe();
  }

}

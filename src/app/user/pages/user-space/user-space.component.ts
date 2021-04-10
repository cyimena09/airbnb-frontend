import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss']
})
export class UserSpaceComponent implements OnInit {

  userRES;

  constructor(private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.getRealEstatesByUserId();
  }

  getRealEstatesByUserId() {
    let id = 1;
    this.realEstateService.getRealEstateByUserId(id).subscribe(
      (data) => {
        console.log(data);
        this.userRES = data;
      }
    );
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RealEstate} from '../../../real-estate/models/real-estate';
import {ActivatedRoute} from '@angular/router';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-private-single-real-estate',
  templateUrl: './private-single-real-estate.component.html',
  styleUrls: ['./private-single-real-estate.component.scss']
})
export class PrivateSingleRealEstateComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  realEstate: RealEstate;
  realEstates: RealEstate[] = [];
  authenticatedUser: User;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private realEstateService: RealEstateService) {
  }

  ngOnInit() {
    this.authenticatedUser = this.authService.authenticatedUser;
    this.realEstateService.getRealEstateById(this.id).subscribe(
      (data: RealEstate) => {
        this.realEstate = data;
        console.log(data);
      });

    this.getRealEstatesByUserId();
  }

  getRealEstatesByUserId() {
    this.realEstateService.getRealEstateByUserId(this.authenticatedUser.id).subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
        console.log(data)
      });
  }

}

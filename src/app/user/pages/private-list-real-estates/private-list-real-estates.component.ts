import { Component, OnInit } from '@angular/core';
import {RealEstate} from '../../../real-estate/models/real-estate';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-private-list-real-estates',
  templateUrl: './private-list-real-estates.component.html',
  styleUrls: ['./private-list-real-estates.component.scss']
})
export class PrivateListRealEstatesComponent implements OnInit {

  realEstates: RealEstate[] = [];
  authenticatedUser;

  constructor(private authService: AuthService, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.authService.authenticatedSubject.subscribe(
      (data: User) => {
        this.authenticatedUser = data;

        if (this.authenticatedUser !== null) {
          this.getRealEstateByUserId();
        }
      });
  }

  getRealEstateByUserId() {
    this.realEstateService.getRealEstateByUserId(this.authenticatedUser.id).subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
      });
  }

}

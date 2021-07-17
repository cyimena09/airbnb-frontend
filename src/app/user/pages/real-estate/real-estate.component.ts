import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RealEstate} from '../../../real-estate/models/real-estate';
import {User} from '../../models/user';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {
  realEstates: RealEstate[] = [];
  authenticatedUser;

  constructor(private authService: AuthService, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.authService.authenticatedSubject.subscribe(
      (data: User) => {
        this.authenticatedUser = data;
        this.getRealEstateByUserId();
      });
  }

  getRealEstateByUserId() {
    this.realEstateService.getRealEstateByUserId(this.authenticatedUser.id).subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
      });
  }

}

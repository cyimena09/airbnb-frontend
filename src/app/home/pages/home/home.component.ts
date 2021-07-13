import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {RealEstate} from '../../../real-estate/models/realEstate';
import {AuthService} from '../../../auth/services/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated = true;
  realEstates: RealEstate[] = [];

  constructor(private authService: AuthService, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.isAuthenticatedSubject.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      });
    this.realEstateService.getRealEstates().subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
      });
  }

}

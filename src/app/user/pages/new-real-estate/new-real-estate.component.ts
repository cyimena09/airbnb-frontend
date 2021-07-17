import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-new-real-estate',
  templateUrl: './new-real-estate.component.html',
  styleUrls: ['./new-real-estate.component.scss']
})
export class NewRealEstateComponent implements OnInit {
  authenticatedUser;

  constructor(private authService: AuthService, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.authService.authenticatedSubject.subscribe(
      (data) => {
        this.authenticatedUser = data;
      });
  }

  onCreateRealEstate(realEstate) {
    console.log('bien recu');
    console.log(realEstate);
    const user = new User();
    user.id = this.authenticatedUser.id;
    realEstate.user = user;

    this.realEstateService.createRealEstate(realEstate).subscribe(
      () => {
        console.log('Le logement à bien été ajouté !');
      },
      (message) => {
        console.log(message.error);
      });
  }

}

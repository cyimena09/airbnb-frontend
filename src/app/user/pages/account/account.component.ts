import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authenticatedSubject.subscribe(
      (data) => {
        this.user = data;
        console.log('cocou')
      });
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.isAuthenticatedSubject.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      });
  }

}

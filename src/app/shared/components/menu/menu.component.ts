import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAuthenticated: boolean = false;
  menu;
  isMenuOpen: boolean = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.isAuthenticatedSubject.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      });
  }

  onHideMenu() {
    const line = this.menu.getElementsByTagName('span');

    if (this.isMenuOpen) {
      for (let i = 0; i < line.length; i++) {
        line[i].style.opacity = '0';
        //line[i].style.display = 'none';
      }
    }

    if (!this.isMenuOpen) {
      for (let i = 0; i < line.length; i++) {
        line[i].style.opacity = '1';
        //line[i].style.display = 'unset';
        line[i].style.transition = '2s';
      }
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  onHideMenu2() {
    this.menu.style.transform = 'translate(-120px)';
    //menu.style.left = '100px';
  }

  onLogout() {
    this.authService.logout();
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onHideMenu() {
    let menu = document.getElementById('menu');
    let line = menu.getElementsByTagName('span');

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
        let menu = document.getElementById('menu');
        menu.style.transform = 'translate(-120px)';
        //menu.style.left = '100px';
        console.log('coucou');

  }

}

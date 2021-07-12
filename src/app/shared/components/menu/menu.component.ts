import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu;
  isMenuOpen: boolean = true;

  constructor() {
  }

  ngOnInit() {
    // todo fix width
    // we get the width of the menu to apply it to the container
    this.menu = document.getElementById('menu');
    const width = this.menu.clientWidth
    const containerMenu = document.getElementById('container-menu')
    containerMenu.style.width = `${width}px`
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

}

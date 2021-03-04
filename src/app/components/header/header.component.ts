import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  disconnected = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.disconnected = !this.disconnected;
  }

}

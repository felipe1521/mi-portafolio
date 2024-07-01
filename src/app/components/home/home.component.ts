import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() { }

  redirectWindow() {
    window.open('https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286');
  }
}

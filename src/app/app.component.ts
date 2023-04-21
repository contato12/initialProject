import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'Button', url: 'button', icon: 'close' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Accordion', url: 'accordion', icon: 'filter' },
    { title: 'Action Sheet', url: 'actionsheet', icon: 'albums' },
    { title: 'Tags', url: 'tags', icon: 'pricetags' },
    { title: 'JavaScript', url: 'javascript', icon: 'code' },
  ];
  constructor() { }
}

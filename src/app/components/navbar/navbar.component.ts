import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  imports: [NgIconsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  openNav() {
    const nav = document.getElementById('mobileNav');
    if (nav) nav.style.width = '100%';
  }

  closeNav() {
    const nav = document.getElementById('mobileNav');
    if (nav) nav.style.width = '0';
  }
}

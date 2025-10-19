import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { HeroComponent } from './components/hero/hero.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const TOOLS = [RouterOutlet, AboutMeComponent, ContactFormComponent, HeroComponent, NavbarComponent, FooterComponent, PracticeAreasComponent];

@Component({
  selector: 'app-root',
  imports: [TOOLS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

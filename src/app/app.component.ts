import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PrimaryNavComponent,
    SecondaryNavComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-racecar';
  selectedOption!: string;

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }
  handleMenuToggle(isMenuOpen: boolean) {
    if (!isMenuOpen) {
      this.selectedOption = ''; // Close secondary navigation
    }
  }
}

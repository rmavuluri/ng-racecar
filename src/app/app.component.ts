import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { HeaderComponent } from './header/header.component';
import { Subscription } from 'rxjs';
import { MenuService } from './menu.service';
import { RightNavComponent } from './right-nav/right-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PrimaryNavComponent,
    SecondaryNavComponent,
    HeaderComponent,
    RightNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-racecar';
  selectedOption!: string;
  selectedRightMenuOption!: string;
  private menuToggleSubscription: Subscription;
  private rightMenuToggledSubscription: Subscription;

  constructor(private menuService: MenuService) {
    this.menuToggleSubscription = this.menuService.menuToggled.subscribe(
      (isMenuOpen) => this.handleMenuToggle(isMenuOpen)
    );
    this.rightMenuToggledSubscription =
      this.menuService.rightMenuToggled.subscribe((isRightMenuOpen) =>
        this.handleRightMenuToggle(isRightMenuOpen)
      );
  }

  // updateSelectedOption(option: string) {
  //   this.selectedOption = option;
  // }
  // updateSelectedRightMenuOption(option: string) {
  //   this.selectedRightMenuOption = option;
  // }

  handleMenuToggle(isMenuOpen: boolean) {
    if (!isMenuOpen) {
      this.selectedOption = ''; // Close secondary navigation
    }
  }

  handleRightMenuToggle(isRightMenuOpen: boolean) {
    if (!isRightMenuOpen) {
      this.selectedRightMenuOption = '';
    }
  }
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private menuService: MenuService) {}
  toggleMenu() {
    this.menuService.toggleMenu();
  }
  //For Right Menu
  toggleRightMenu() {
    this.menuService.toggleRightMenu();
  }
}

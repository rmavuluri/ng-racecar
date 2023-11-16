import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private menuService: MenuService) {}
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}

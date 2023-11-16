import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
@Component({
  selector: 'app-primary-nav',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.scss',
})
export class PrimaryNavComponent {
  public menuOpen = false;

  @Output() selectedOption = new EventEmitter<string>();
  @Output() menuToggled = new EventEmitter<boolean>(); // New EventEmitter

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuToggled.emit(this.menuOpen); // Emit an event when the menu is toggled
  }

  openSecondaryNav(option: string) {
    this.selectedOption.emit(option);
  }
}

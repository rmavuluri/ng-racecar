import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-primary-nav',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.scss',
})
export class PrimaryNavComponent {
  menuOpen = false;
  @Output() selectedOption = new EventEmitter<string>();
  private menuSubscription: Subscription;

  currentActiveOption: string = '';

  constructor(private menuService: MenuService) {
    this.menuSubscription = this.menuService
      .getMenuState()
      .subscribe((isOpen) => (this.menuOpen = isOpen));
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

  openSecondaryNav(option: string) {
    // this.selectedOption.emit(option);
    if (this.currentActiveOption === option) {
      // If the same option is selected again, emit null to close the submenu
      this.selectedOption.emit('');
      this.currentActiveOption = '';
    } else {
      this.selectedOption.emit(option);
      this.currentActiveOption = option;
    }
  }
}

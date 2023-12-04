import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-right-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './right-nav.component.html',
  styleUrl: './right-nav.component.scss',
})
export class RightNavComponent implements OnDestroy {
  rightMenuOpen = false;
  private rightMenuSubscription: Subscription;

  @Output() selectedRightMenuOption = new EventEmitter<string>();

  constructor(private menuService: MenuService) {
    this.rightMenuSubscription = this.menuService
      .getRightMenuState()
      .subscribe((isRightMenuOpen) => (this.rightMenuOpen = isRightMenuOpen));
  }

  ngOnDestroy() {
    this.rightMenuSubscription.unsubscribe();
  }

  selectRightMenuOption(option: string) {
    this.selectedRightMenuOption.emit(option);
    this.menuService.closeRightMenu();
  }
}

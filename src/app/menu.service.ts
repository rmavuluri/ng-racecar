import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuState = new BehaviorSubject<boolean>(false);
  menuToggled = new EventEmitter<boolean>();

  toggleMenu() {
    const newState = !this.menuState.value;
    this.menuState.next(newState);
    this.menuToggled.emit(newState); // Emit the new stat
  }

  getMenuState() {
    return this.menuState.asObservable();
  }
}

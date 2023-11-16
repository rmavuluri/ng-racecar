import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  //For Left Menu
  private menuState = new BehaviorSubject<boolean>(false);
  menuToggled = new EventEmitter<boolean>();

  //For right Menu
  private rightMenuState = new BehaviorSubject<boolean>(false);
  rightMenuToggled = new EventEmitter<boolean>();

  //For Left
  toggleMenu() {
    const newState = !this.menuState.value;
    this.menuState.next(newState);
    this.menuToggled.emit(newState); // Emit the new stat
  }

  //For Left
  getMenuState() {
    return this.menuState.asObservable();
  }

  //For Right
  toggleRightMenu() {
    console.log('In service for right...!');
    const newRightState = !this.rightMenuState.value;
    this.rightMenuState.next(newRightState);
    this.rightMenuToggled.emit(newRightState);
  }

  //For Right
  getRightMenuState() {
    return this.rightMenuState.asObservable();
  }
}

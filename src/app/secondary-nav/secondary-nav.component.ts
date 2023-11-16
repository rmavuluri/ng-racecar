import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './secondary-nav.component.html',
  styleUrl: './secondary-nav.component.scss',
})
export class SecondaryNavComponent {
  @Input() currentOption!: string;

  backToPrimary() {
    this.currentOption = '';
  }
}

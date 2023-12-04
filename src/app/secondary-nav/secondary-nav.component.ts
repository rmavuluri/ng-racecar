import {
  Component,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [CommonModule, OverlayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './secondary-nav.component.html',
  styleUrl: './secondary-nav.component.scss',
})
export class SecondaryNavComponent {
  @Input() currentOption!: string;

  @ViewChild(OverlayComponent) flyoutComponent!: OverlayComponent;

  toggleFlyout() {
    this.flyoutComponent.toggleFlyout();
  }

  backToPrimary() {
    this.currentOption = '';
  }
  overlayOpen = false;

  toggleOverlay() {
    this.overlayOpen = !this.overlayOpen;
  }
}

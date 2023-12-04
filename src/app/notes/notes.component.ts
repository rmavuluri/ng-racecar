import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, SignupComponent, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  // isExpanded = false;
  // initialWidth = 100;
  // initialHeight = 100;
  // expandedWidth = 300;
  // expandedHeight = 300;

  // toggleSize() {
  //   this.isExpanded = !this.isExpanded;
  // }
  constructor(public dialog: MatDialog) {}

  openSignupModal(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      // other configuration
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // handle result if needed
    });
  }
}

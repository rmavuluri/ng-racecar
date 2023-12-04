import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}

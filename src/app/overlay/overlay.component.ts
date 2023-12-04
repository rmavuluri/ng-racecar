import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownService } from '../markdown.service';
import * as marked from 'marked';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  isOpen = false;
  markdownContent: string = '';

  constructor(private markdownService: MarkdownService) {}

  toggleFlyout(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.markdownService
      .getMarkdown('assets/angular-component.md')
      .subscribe((markdown) => {
        this.markdownContent = marked.parse(markdown);
      });
  }
}

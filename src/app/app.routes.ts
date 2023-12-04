import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { CommentsComponent } from './comments/comments.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

export const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'suggestions',
    component: SuggestionsComponent,
  },
];

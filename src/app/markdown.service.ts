import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  constructor(private http: HttpClient) {}

  getMarkdown(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}

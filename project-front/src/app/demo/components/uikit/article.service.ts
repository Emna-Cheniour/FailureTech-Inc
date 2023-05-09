import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:3000/article';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  saveArticle(file: any, content: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('content', content);
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updateArticle(articleId: string, content: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${articleId}`, { content });
  }

  deleteArticle(articleId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${articleId}`);
  }

  addComment(articleId: string, comment: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${articleId}/comments`, { comment });
  }
}

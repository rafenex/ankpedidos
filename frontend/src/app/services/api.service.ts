import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:8080';

  post<T>(route: string, dados?: unknown): Observable<T> {
    return this.http.post<T>(this.apiUrl + route, dados);
  }
}

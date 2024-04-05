import { Injectable } from '@angular/core';
import {
  CategoriaRequest,
  CategoriaResponse,
} from '../../models/categoria/categoria';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../errorHandling';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8080/categorias';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getCategorias(): Observable<CategoriaResponse[]> {
    return this.http.get<any>(`${this.URL}`).pipe(
      map((response) => {
        return response.content;
      })
    );
  }

  addCategoria(categoria: CategoriaRequest) {
    return this.http
      .post<CategoriaRequest>(this.URL, categoria, this.httpOptions)
      .pipe(catchError(handleError));
  }

  updateCategoria(categoria: CategoriaResponse): Observable<CategoriaResponse> {
    let url = this.URL + '/' + categoria.id;
    return this.http
      .put<CategoriaResponse>(url, categoria)
      .pipe(catchError(handleError));
  }

  deleteCategoria(id: number): Observable<unknown> {
    const url = `${this.URL}/${id}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(handleError));
  }
}

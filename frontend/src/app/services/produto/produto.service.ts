import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Produto } from '../../models/produto/produto';
import { handleError } from '../errorHandling';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8080/produtos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getProdutos(): Observable<Produto[]> {
    return this.http.get<any>(`${this.URL}`).pipe(
      map((response) => {
        return response.content;
      })
    );
  }

  addProduto(produto: Produto) {
    return this.http
      .post<Produto>(this.URL, produto, this.httpOptions)
      .pipe(catchError(handleError));
  }

  updateProduto(produto: Produto): Observable<Produto> {
    let url = this.URL + '/' + produto.id;
    return this.http.put<Produto>(url, produto).pipe(catchError(handleError));
  }

  deleteProduto(id: number): Observable<unknown> {
    const url = `${this.URL}/${id}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(handleError));
  }
}

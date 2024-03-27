import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Pedido, PedidoRequest } from '../../models/pedido/pedido';
import { handleError } from '../errorHandling';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8080/pedidos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<any>(`${this.URL}`).pipe(
      map((response) => {
        return response.content;
      })
    );
  }

  findById(id: number): Observable<Pedido> {
    return this.http
      .get<any>(`${this.URL}/${id}`)
      .pipe(catchError(handleError));
  }

  savePedido(pedido: PedidoRequest) {
    return this.http
      .post<PedidoRequest>(this.URL, pedido, this.httpOptions)
      .pipe(catchError(handleError));
  }

  deletePedido(id: number): Observable<unknown> {
    const url = `${this.URL}/${id}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(handleError));
  }
}

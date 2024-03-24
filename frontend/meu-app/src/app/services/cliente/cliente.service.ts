import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Cliente, ClienteForm } from '../../models/cliente/cliente';
import { handleError } from '../errorHandling';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8080/clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getClientes(): Observable<Cliente[]> {
    return this.http.get<any>(`${this.URL}`).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addCliente(cliente: ClienteForm) {
    console.log(cliente);
    return this.http
      .post<ClienteForm>(this.URL, cliente, this.httpOptions)
      .pipe(catchError(handleError));
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    let url = this.URL + '/' + cliente.id;
    return this.http.put<Cliente>(url, cliente).pipe(catchError(handleError));
  }

  deleteCliente(id: number): Observable<unknown> {
    const url = `${this.URL}/${id}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(handleError));
  }
}

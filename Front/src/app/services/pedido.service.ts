import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BASE_URL } from './config';
import { Cliente, Produto } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getPedidos(params? : any): Observable<any> {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    console.log(`${BASE_URL}/pedidos`, { params: httpParams })
    return this.http.get(`${BASE_URL}/pedidos`, { params: httpParams });
  
  }


  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
}

  getAllClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${BASE_URL}/clientes`)
  }

  getAllProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(`${BASE_URL}/produtos`)
  }

  novoPedido(pedido: any):Observable<any> {
   return this.http.post(`${BASE_URL}/pedidos`, pedido)
  }
}

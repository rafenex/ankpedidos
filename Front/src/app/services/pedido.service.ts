import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './config';
import { Cliente, Produto } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getAllPedidos(): Observable<any> {
    return this.http.get(`${BASE_URL}/pedidos`)
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

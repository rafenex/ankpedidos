import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getAllPedidos(): Observable<any> {
    return this.http.get(`${BASE_URL}/pedidos`)
  }

  novoPedido(pedido: any) {
    this.http.post(`${BASE_URL}/pedidos`, pedido).subscribe(
      response => {
        // Lógica a ser executada após o sucesso da solicitação
        console.log(response);
      },
      error => {
        // Lógica a ser executada em caso de erro na solicitação
        console.error(error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { Cliente, PedidoResponse, Produto } from 'src/app/models/api';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  constructor(private pedidoService : PedidoService){}
  pedidoResponse : PedidoResponse[] = []
  listarPedidosOpen: Boolean = false;
  novoPedidoOpen: Boolean = false;
  clientes!: Cliente[];
  produtos!: Produto[];

  listarPedidos(){
    this.listarPedidosOpen = true
    this.novoPedidoOpen = false
    this.pedidoService.getAllPedidos()
    .subscribe(data => {
      this.pedidoResponse = data
    })
  }
  novoPedido(){
    this.novoPedidoOpen = true
    this.listarPedidosOpen = false
    this.pedidoService.getAllClientes()
    .subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
    this.pedidoService.getAllProdutos()
    .subscribe((data : Produto[]) => {
      this.produtos = data;
    })
  }

  addNovoPedido(novoPedido : any){
    this.pedidoService.novoPedido(novoPedido)
  }




}

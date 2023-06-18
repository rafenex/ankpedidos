import { Component } from '@angular/core';
import { PedidoResponse } from 'src/app/models/api';
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
  }




}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  listarPedidosOpen: Boolean = false;
  novoPedidoOpen: Boolean = false;

  listarPedidos(){
    this.listarPedidosOpen = true
    this.novoPedidoOpen = false
  }
  novoPedido(){
    this.novoPedidoOpen = true
    this.listarPedidosOpen = false
  }

}

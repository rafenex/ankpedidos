import { Component, Input } from '@angular/core';
import { PedidoResponse } from 'src/app/models/api';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {
  @Input()
  public isOpen!: Boolean;
  @Input()
  public  pedidoResponse : PedidoResponse[] = []
 
  constructor(){}

  ngOnInit() {
  
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {

  products: any[] = [
    {
      code: 1,
      name: 'Produto 1',
      category: 'Categoria 1',
      quantity: 100
    }
  ];

}

import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PedidoService } from '../../../services/pedido/pedido.service';
import { Pedido } from '../../../models/pedido/pedido';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente/cliente';

@Component({
  selector: 'app-pedido-detalhado',
  templateUrl: './pedido-detalhado.component.html',
  styleUrl: './pedido-detalhado.component.scss',
})
export class PedidoDetalhadoComponent {
  id: any;
  pedido = {} as Pedido;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.findById(this.id);
  }

  findById(id: number): void {
    this.pedidoService.findById(id).subscribe((response: Pedido) => {
      this.pedido = response;
    });
  }
}

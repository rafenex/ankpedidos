import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido } from '../../models/pedido/pedido';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss',
})
export class PedidoComponent {
  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  pedidos$!: Observable<Pedido[]>;
  displayedColumns = ['id', 'clienteNome', 'clienteEndereco', 'data', 'total'];
  openDialog = false;

  getProdutos() {
    this.pedidos$ = this.pedidoService.getPedidos();
  }

  onShow(pedido: Pedido) {
    this.router.navigate(['/pedido-detalhado', pedido.id], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.getProdutos();
  }
}

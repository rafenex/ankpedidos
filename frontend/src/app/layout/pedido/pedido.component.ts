import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido/pedido';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss',
})
export class PedidoComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  pedidos: Pedido[] = [];
  displayedColumns = ['id', 'clienteNome', 'clienteEndereco', 'data', 'total'];
  openDialog = false;

  getPedidos() {
    this.apiService.get<Pedido[]>(`/pedidos`).subscribe((res : any) =>{
      this.pedidos = res.content
    })
  }

  onShow(pedido: Pedido) {
    this.router.navigate(['/pedido-detalhado', pedido.id], {
      relativeTo: this.route,
    });
  }

  novoPedido() {
    this.router.navigate(['/novo-pedido'], {
      relativeTo: this.route,
    });
  }

  deletePedido(pedido: Pedido) {
    this.apiService.delete(`/pedidos`,pedido.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Pedido removido',
        });
        this.getPedidos();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao deletar pedido',
        });
      },
    });
  }

  deleteDialog(event: Event, pedido: Pedido) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover a pedido ${pedido.id}?`,
      header: 'Confirmação de remoção',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deletePedido(pedido);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejeitado',
          detail: 'Você rejeitou a ação',
        });
      },
    });
  }

  ngOnInit(): void {
    this.getPedidos();
  }
}

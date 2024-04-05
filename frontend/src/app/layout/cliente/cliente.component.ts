import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss',
})
export class ClienteComponent {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  clientes: Cliente[] = [];
  displayedColumns = ['nome', 'cpfcnpj', 'endereco', 'telefone', 'acoes'];
  openDialog = false;
  clienteEdit = {} as Cliente;

  showFormDialog(show: boolean, cliente?: Cliente) {
    this.clienteEdit = {} as Cliente;
    if (cliente) {
      this.clienteEdit = cliente;
    }
    this.openDialog = show;
  }

  addCliente(cliente: Cliente) {
    this.apiService.post(`/clientes`,cliente).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Cliente adicionado',
        });
        this.getClientes();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao adicionar cliente',
        });
      },
    });
  }

  updateCliente(cliente: Cliente) {
    this.apiService.put(`/clientes`,cliente.id, cliente).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Cliente editado',
        });
        this.getClientes();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao editar cliente',
        });
      },
    });
  }

  getClientes() {
    this.apiService.get<Cliente[]>(`/clientes`).subscribe((res: any) => {
      this.clientes = res.content
    })
  }

  deleteCliente(cliente: Cliente) {
    this.apiService.delete(`/clientes`, cliente.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Cliente removido',
        });
        this.getClientes();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao deletar cliente',
        });
      },
    });
  }

  deleteDialog(event: Event, cliente: Cliente) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover o cliente ${cliente.nome}?`,
      header: 'Confirmação de remoção',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deleteCliente(cliente);
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
    this.getClientes();
  }
}

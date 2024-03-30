import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Cliente } from '../../models/cliente/cliente';
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss',
})
export class ClienteComponent {
  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  clientes$!: Observable<Cliente[]>;
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
    this.clienteService.addCliente(cliente).subscribe({
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
    this.clienteService.updateCliente(cliente).subscribe({
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
    this.clientes$ = this.clienteService.getClientes();
  }

  deleteCliente(cliente: Cliente) {
    this.clienteService.deleteCliente(cliente.id).subscribe({
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

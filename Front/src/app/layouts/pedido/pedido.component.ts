import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { catchError, of } from 'rxjs';
import {
  Cliente,
  ItemPedido,
  PedidoResponse,
  Produto,
} from 'src/app/models/api';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {
  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService
  ) {}
  removePedidoId = 0;
  pedidoResponse: PedidoResponse[] = [];
  listarPedidosOpen: Boolean = false;
  novoPedidoOpen: Boolean = false;
  clientes!: Cliente[];
  produtos!: Produto[];
  messages!: Message[];
  itensPedido: ItemPedido[] = [];
  totalElements!: number;

  listarPedidos() {
    this.listarPedidosOpen = true;
    this.novoPedidoOpen = false;
  }

  getPedidos(params?: any) {
    this.pedidoService.getPedidos(params).subscribe((response) => {
      this.pedidoResponse = response.content;
      this.totalElements = response.totalElements;
    });
  }

  novoPedido() {
    this.itensPedido = [];
    this.novoPedidoOpen = true;
    this.listarPedidosOpen = false;
    this.pedidoService.getAllClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
    this.pedidoService.getAllProdutos().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

  addNovoPedido(novoPedido: any) {
    return this.pedidoService
      .novoPedido(novoPedido)
      .pipe(
        catchError((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao registrar pedido',
          });
          return of(null); // Retorna um observable com valor nulo para evitar que o erro seja propagado
        })
      )
      .subscribe((response) => {
        if (response !== null) {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Pedido registrado com sucesso',
          });
          this.novoPedidoOpen = false;
        }
        return response; // Retorna o resultado do pedido
      });
  }

  removePedido(id: number) {
    this.pedidoService.removePedido(id).subscribe(
      () => {
        this.removePedidoId = id;
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Pedido removido com sucesso',
        });
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao remover pedido',
        });
      }
    );
  }
}

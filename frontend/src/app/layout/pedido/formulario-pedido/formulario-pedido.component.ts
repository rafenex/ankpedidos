import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { PedidoService } from '../../../services/pedido/pedido.service';
import {
  ItemPedido,
  ItemPedidoRequest,
  Pedido,
  PedidoRequest,
} from '../../../models/pedido/pedido';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Produto } from '../../../models/produto/produto';
import { ProdutoService } from '../../../services/produto/produto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrl: './formulario-pedido.component.scss',
})
export class FormularioPedidoComponent {
  id: any;
  pedido = {} as Pedido;
  pedidoRequest = {} as PedidoRequest;
  errorMessage = 'Digite um nome válido';
  clientes$!: Observable<Cliente[]>;
  produtos$!: Observable<Produto[]>;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private messageService: MessageService,
    private router: Router
  ) {}

  userForm = this.fb.group({
    cliente: 0,
    id: 0,
    clienteNome: '',
    clienteTelefone: '',
    clienteCpf: '',
    clienteEndereco: '',
    total: 0,
  });

  ngOnInit() {
    this.pedidoRequest.itemPedido = [];
    this.pedido.itemPedido = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id');
        this.findById(this.id);
      }
    });
    this.getClientes();
    this.getProdutos();
  }

  getClientes() {
    this.clientes$ = this.clienteService.getClientes();
  }

  getProdutos() {
    this.produtos$ = this.produtoService.getProdutos();
  }

  findById(id: number): void {
    this.pedidoService.findById(id).subscribe((response: Pedido) => {
      this.pedido = response;
      this.userForm.setValue({
        id: this.pedido.id,
        cliente: 0,
        clienteNome: this.pedido.clienteNome,
        clienteCpf: this.pedido.clienteCpf,
        clienteEndereco: this.pedido.clienteEndereco,
        clienteTelefone: this.pedido.clienteTelefone,
        total: this.pedido.total,
      });
    });
  }

  handleClienteForm(event: any) {
    const idCliente = event.value;
    let cliente = {} as Cliente;
    this.clientes$.subscribe((clientes) => {
      cliente = clientes.find((c) => c.id === idCliente) ?? ({} as Cliente);
      this.userForm.patchValue({
        clienteNome: cliente.nome,
        clienteCpf: cliente.cpf,
        clienteEndereco: cliente.endereco,
        clienteTelefone: cliente.telefone,
      });
      this.pedidoRequest.clienteId = idCliente;
    });
  }

  onAddItemPedido(itemPedido: ItemPedido) {
    this.pedido.itemPedido.push(itemPedido);
    this.userForm.patchValue({
      total: this.pedido.itemPedido.reduce((acc, item) => acc + item.total, 0),
    });
    const newItemPedido = {} as ItemPedidoRequest;
    newItemPedido.cor = itemPedido.cor;
    newItemPedido.preco = itemPedido.preco;
    newItemPedido.produto = { id: itemPedido.produto.id };
    newItemPedido.quantidade = itemPedido.quantidade;
    this.pedidoRequest.itemPedido.push(newItemPedido);
  }

  onSubmit() {
    this.savePedido(this.pedidoRequest);
  }

  savePedido(pedidoRequest: PedidoRequest) {
    this.pedidoService.savePedido(pedidoRequest).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Pedido salvo',
        });
        setTimeout(() => {
          this.router.navigate(['/pedidos'], {
            relativeTo: this.route,
          });
        }, 1000);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao salvar pedido',
        });
      },
    });
  }
}

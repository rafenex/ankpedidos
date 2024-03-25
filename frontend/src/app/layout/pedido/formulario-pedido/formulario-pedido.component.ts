import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PedidoService } from '../../../services/pedido/pedido.service';
import { ItemPedido, Pedido } from '../../../models/pedido/pedido';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Produto } from '../../../models/produto/produto';
import { ProdutoService } from '../../../services/produto/produto.service';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrl: './formulario-pedido.component.scss',
})
export class FormularioPedidoComponent {
  id: any;
  pedido = {} as Pedido;
  errorMessage = 'Digite um nome válido';
  clientes$!: Observable<Cliente[]>;
  produtos$!: Observable<Produto[]>;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
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
    });
  }
}

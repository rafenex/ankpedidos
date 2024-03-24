import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PedidoService } from '../../../services/pedido/pedido.service';
import { ItemPedido, Pedido } from '../../../models/pedido/pedido';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrl: './formulario-pedido.component.scss',
})
export class FormularioPedidoComponent {
  id: any;
  pedido = {} as Pedido;
  errorMessage = 'Digite um nome válido';
  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private fb: FormBuilder
  ) {}

  userForm = this.fb.group({
    id: 0,
    clienteNome: '',
    clienteTelefone: '',
    clienteCpf: '',
    clienteEndereco: '',
    total: 0,
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.findById(this.id);
  }

  findById(id: number): void {
    this.pedidoService.findById(id).subscribe((response: Pedido) => {
      this.pedido = response;
      this.userForm.setValue({
        id: this.pedido.id,
        clienteNome: this.pedido.clienteNome,
        clienteCpf: this.pedido.clienteCpf,
        clienteEndereco: this.pedido.clienteEndereco,
        clienteTelefone: this.pedido.clienteTelefone,
        total: this.pedido.total,
      });
    });
  }
}

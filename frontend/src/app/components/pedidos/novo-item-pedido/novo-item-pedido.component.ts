import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../models/produto/produto';
import { FormBuilder } from '@angular/forms';
import { ItemPedido } from '../../../models/pedido/pedido';

@Component({
  selector: 'app-novo-item-pedido',
  templateUrl: './novo-item-pedido.component.html',
  styleUrl: './novo-item-pedido.component.scss',
})
export class NovoItemPedidoComponent {
  visible: boolean = false;
  @Input() produtos = [] as Produto[];
  @Output() newItemPedidoEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  showDialog() {
    this.visible = true;
  }

  userForm = this.fb.group({
    produto: [0],
    quantidade: [0],
    valor: [0],
    cor: [''],
  });

  onSubmit() {
    const produtoSelected = this.produtos.find((prod) => {
      return prod.id === this.userForm.value.produto;
    });

    const formData = {
      produto: produtoSelected,
      quantidade: this.userForm.value.quantidade,
      preco: this.userForm.value.valor,
      cor: this.userForm.value.cor,
      total: this.userForm.value.valor! * this.userForm.value.quantidade!,
    } as ItemPedido;

    this.newItemPedidoEvent.emit(formData);
    this.visible = false;
  }
}

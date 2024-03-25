import { Component, Input } from '@angular/core';
import { Produto } from '../../../models/produto/produto';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-novo-item-pedido',
  templateUrl: './novo-item-pedido.component.html',
  styleUrl: './novo-item-pedido.component.scss',
})
export class NovoItemPedidoComponent {
  visible: boolean = false;
  @Input() produtos = [] as Produto[];

  constructor(private fb: FormBuilder) {}

  showDialog() {
    this.visible = true;
  }

  userForm = this.fb.group({
    produto: [''],
    quantidade: [0],
    cor: [''],
    valor: [0],
  });
}

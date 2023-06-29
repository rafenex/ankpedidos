import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente, ItemPedido, PedidoRequest, Produto } from 'src/app/models/api';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent {
  @Input()
  isOpen!: Boolean;
  @Input()
  resetItens!: Boolean;
  @Input()
  clientes!: Cliente[];
  @Input()
  produtos!: Produto[];
  @Input()
  itensPedido!: ItemPedido[];

  @Output() novoPedidoEvent = new EventEmitter<any>();

  constructor(private pedidoService: PedidoService){}
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['resetItens'] && !changes['resetItens'].firstChange) {
  //       this.itensPedido = this.itensPedidoReset
  //   }
  // }
  


  quantidade!: number;
  quantidadeInicial = this.quantidade
  itensPedidoReset: ItemPedido[] = []
  selectedCliente!: Cliente;
  selectedProduto!: Produto;
  preco!: number;

  cor = {cor : ''}
  totalPedido = 0
  optionsCor = [
    { cor: 'Azul' },
    { cor: 'Verde' },
    { cor: 'Amarelo' },
    { cor: 'Branco' },
    { cor: 'Preto' },
    { cor: 'Vermelho' },
    { cor: 'Rosa' },
    { cor: 'Laranja' },
    { cor: 'Roxo' },
    { cor: 'Marrom' }
  ];


  

  atribuirPreco(){
    this.preco = this.selectedProduto.valorPadrao
  }


  newItemPedido(){
    const novoItem:ItemPedido = {
      produto: {
        id: this.selectedProduto.id,
        nome: this.selectedProduto.nome
      },
      quantidade: this.quantidade,
      cor: this.cor.cor,
      preco: this.preco,
    }
    this.itensPedido.push(novoItem)
    this.selectedProduto = {} as Produto;
    this.preco = this.quantidadeInicial
    this.quantidade = this.quantidadeInicial
    this.cor = {cor: ''}
    this.totalPedido = this.itensPedido.reduce((partialSum, a) => partialSum + a.quantidade * a.preco, 0)


  }

  finalizarPedido(){
    const novoPedido : PedidoRequest  = {
      clienteId: this.selectedCliente.id,
      itemPedido : this.itensPedido
    }
      this.novoPedidoEvent.emit(novoPedido);
  }

  formatter(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }





}

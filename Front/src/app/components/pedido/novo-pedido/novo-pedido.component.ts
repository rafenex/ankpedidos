import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  public isOpen!: Boolean;
  @Input()
  clientes!: Cliente[];

  @Output() novoPedidoEvent = new EventEmitter<any>();

  constructor(private pedidoService: PedidoService){}
  ngOnInit() {

  }

  quantidade!: number;
  quantidadeInicial = this.quantidade
  itensPedido: ItemPedido[] = []
  selectedCliente!: Cliente;
  selectedProduto!: Produto;
  preco!: number;

  cor = ''
  totalPedido = 0
  produtos: Produto[] = [
    {
      id : 1,
      nome : "Produto 1",
      preco: 100
    },
    {
      id : 2,
      nome : "Produto 2",
      preco: 200
    },
    {
      id : 3,
      nome : "Produto 3",
      preco: 200
    }
  ]


  

  atribuirPreco(){
    this.preco = this.selectedProduto.preco
  }


  newItemPedido(){
    const novoItem:ItemPedido = {
      produto: {
        id: this.selectedProduto.id,
        nome: this.selectedProduto.nome
      },
      quantidade: this.quantidade,
      cor: this.cor,
      preco: this.preco,
    }
    this.itensPedido.push(novoItem)
    this.selectedProduto = {} as Produto;
    this.quantidade = this.quantidadeInicial
    this.cor = ''
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

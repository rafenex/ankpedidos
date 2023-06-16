import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente, ItemPedido, Produto } from 'src/app/models/api';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent {
  @Input()
  public isOpen!: Boolean;
  quantidade!: number;
  quantidadeInicial = this.quantidade
  itensPedido: ItemPedido[] = []
  selectedCliente!: Cliente;
  selectedProduto!: Produto;
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


  clientes: Cliente[] = [
      {
        "id": 1,
        "nome": "Nataniel",
        "cpf": "102.001.001-10",
        "endereco": "Rua Copacabana, 225 - Copacabana - Rio de Janeiro - RJ"
      },
      {
        "id": 2,
        "nome": "Joseval",
        "cpf": "104.001.001-10",
        "endereco": "Rua Copacabana, 225 - Copacabana - Rio de Janeiro - RJ"
      },
 
  ]



  newItemPedido(){
    const novoItem:ItemPedido = {
      produto: {
        id: this.selectedProduto.id,
        nome: this.selectedProduto.nome
      },
      quantidade: this.quantidade,
      cor: this.cor,
      preco: this.selectedProduto.preco,
    }
    this.itensPedido.push(novoItem)
    this.selectedProduto = {} as Produto;
    this.quantidade = this.quantidadeInicial
    this.cor = ''
    this.totalPedido = this.itensPedido.reduce((partialSum, a) => partialSum + a.quantidade * a.preco, 0)


  }

  finalizarPedido(){
    console.log(this.itensPedido)
  }

  formatter(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  onSubmit(){
    alert('oi')
  }



}

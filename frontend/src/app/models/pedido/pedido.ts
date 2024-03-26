import { Produto } from '../produto/produto';

export interface Pedido {
  id: number;
  clienteNome: string;
  clienteTelefone: string;
  clienteCpf: string;
  clienteEndereco: string;
  itemPedido: ItemPedido[];
  data: string;
  total: number;
}

export interface ItemPedido {
  id: number;
  produto: Produto;
  quantidade: number;
  preco: number;
  cor: string;
  total: number;
}

export interface PedidoRequest {
  clienteId: number;
  itemPedido: ItemPedidoRequest[];
  total: number;
}

export interface ItemPedidoRequest {
  produto: { id: number };
  quantidade: number;
  preco: number;
  cor: string;
  total: number;
}

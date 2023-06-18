export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    endereco: string;
  }

  export interface Produto {
    id: number;
    nome: string;
    preco: number;
  }

  export interface ItemPedido {
    produto: {
      id: number;
      nome: string;
    };
    quantidade: number;
    cor: string;
    preco: number;
  }

  export interface ItemPedidoReponse {
    cor: string;
    id: number;
    preco: number;
    produto: Produto;
    quantidade: number;
    total: number;
  }
  
  export interface PedidoResponse {
    clienteEndereco: string;
    clienteNome: string;
    data: string;
    id: number;
    itemPedido: ItemPedidoReponse[];
    total: number;
  }
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
    };
    quantidade: number;
    cor: string;
    preco: number;
  }
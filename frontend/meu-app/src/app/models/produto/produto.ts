export interface Produto {
  id: number;
  nome: string;
  referencia: string;
  valorPadrao: number;
  categoria: string;
}

export interface ProdutoForm {
  nome: string;
  referencia: string;
  valorPadrao: number;
  categoria: number;
}

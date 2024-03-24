export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
}

export interface ClienteForm {
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
}

export interface Cliente {
  id: number;
  nome: string;
  cpfcnpj: string;
  endereco: string;
  telefone: string;
  tipo: string;
}

export interface ClienteForm {
  nome: string;
  cpfcnpj: string;
  endereco: string;
  telefone: string;
  tipo: string;
}

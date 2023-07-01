import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacaoService {
  private mensagemRemocaoPedido = new BehaviorSubject<string>('');

  enviarMensagem(mensagem: string) {
    this.mensagemRemocaoPedido.next(mensagem);
  }

  obterMensagem() {
    return this.mensagemRemocaoPedido.asObservable();
  }
}

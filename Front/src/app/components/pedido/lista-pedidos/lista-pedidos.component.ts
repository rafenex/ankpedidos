import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import {  PedidoResponse } from 'src/app/models/api';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})


export class ListaPedidosComponent {
  @Input()
  public isOpen!: Boolean;
  @Input()
  public  pedidoResponse : PedidoResponse[] = []

  @Input()
  public  totalElements : number = 0

  @Output() listarPedidosEvent = new EventEmitter<any>();

  first: number = 0;

  rows: number = 10;

  nomeCliente: string = '';

   params = {
    page: 0,
    size: 10,
    nomeCliente: this.nomeCliente // Valor do campo nomeCliente
  };

  onPageChange(event: PaginatorState) {
    this.getPedidos(this.params)

  }


  constructor(){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && changes['isOpen'].currentValue === true) {
      this.getPedidos();
    }
  }

  getPedidos(params? : any) {
    this.listarPedidosEvent.emit(params)

  }

  buscarPedidos() {
    const params = {
      page: 0,
      size: 10,
      nomeCliente: this.nomeCliente
    };
  
    this.getPedidos(params)
  }



}

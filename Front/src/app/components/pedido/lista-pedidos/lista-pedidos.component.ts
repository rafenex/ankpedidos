import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { PedidoResponse } from 'src/app/models/api';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent {
  @Input()
  public isOpen!: Boolean;
  @Input()
  public pedidoResponse: PedidoResponse[] = [];

  @Input()
  public totalElements!: number;

  @Output() listarPedidosEvent = new EventEmitter<any>();

  options = [
    { label: 1, value: 1 },
    { label: 3, value: 3 },
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 'Total', value: this.totalElements },
  ];

  first: number = 0;

  rows: number = 10;

  nomeCliente: string = '';

  selectedRowsPerPage: number = 0;

  params = {
    page: this.first,
    size: this.rows,
    nomeCliente: this.nomeCliente, // Valor do campo nomeCliente
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && changes['isOpen'].currentValue === true) {
      this.getPedidos();
    }
  }

  onRowsPerPageChange(event: any) {
    event == undefined
      ? (this.params.size = this.totalElements)
      : (this.params.size = event);
    this.params.nomeCliente = this.nomeCliente;
    this.params.page = this.first;
    this.getPedidos(this.params);
  }

  getPedidos(params?: any) {
    console.log(params);
    this.listarPedidosEvent.emit(params);
  }

  buscarPedidos() {
    this.selectedRowsPerPage = 5;
    const params = {
      page: 0,
      size: this.selectedRowsPerPage,
      nomeCliente: this.nomeCliente,
    };

    this.getPedidos(params);
  }
}

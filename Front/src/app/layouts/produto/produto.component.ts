import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Produto, PageEvent, ColsProduct } from 'src/app/models/api';
import { ProdutoService } from 'src/app/services/produto.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {
  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  dialogAberto: boolean = false;
  cols = ColsProduct;
  products: Produto[] = [];
  first: number = 0;
  rows: number = 5;
  totalRecords: number = 5;
  deleteDialog = false;
  pageable: PageEvent = {
    page: 0,
    size: 5,
  };

  ngOnInit() {
    this.getProducts(this.pageable);
  }

  onPageChange(event: PaginatorState) {
    console.log(event);
    this.first = event.page! * event.rows!;
    this.rows = event.rows!;

    const pageable: PageEvent = {
      page: event.page,
      size: event.rows,
    };
    this.getProducts(pageable);
  }

  getProducts(pageable: PageEvent) {
    console.log(pageable);
    this.produtoService.getAllProdutos(pageable).subscribe((response) => {
      const produtos: Produto[] = response.content;
      this.products = produtos;
      this.totalRecords = response.totalElements;
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
        this.confirmationService.close();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
        this.confirmationService.close();
      },
    });
  }
}

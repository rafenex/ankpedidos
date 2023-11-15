import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { Produto, PageEvent, ColsProduct } from 'src/app/models/api';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {
  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) {}

  loading: boolean = false;
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
    this.produtoService.getAllProdutos(pageable).subscribe((response) => {
      const produtos: Produto[] = response.content;
      this.products = produtos;
      this.totalRecords = response.totalElements;
    });
  }
  async deleteProduto(id: number) {
    this.loading = true;
    this.produtoService.removeProduto(id).subscribe(
      () => {
        this.loading = false;
        const objWithIdIndex = this.products.findIndex((obj) => obj.id === id);
        this.products.splice(objWithIdIndex, 1);
        this.messageService.add({
          severity: 'info',
          summary: 'Removido',
          detail: 'Produto removido',
        });
      },
      (error) => {
        // Lide com erros aqui, se necessário
        console.error('Erro ao remover o produto:', error);
        this.messageService.add({
          severity: 'info',
          summary: 'Erro',
          detail: 'Erro ao remover produto',
        });
      }
    );
  }
  removeImage(imgId: number, produtoId: number) {
    this.loading = true;
    this.produtoService.removeImage(produtoId, imgId).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Removida',
          detail: 'Imagem removida',
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'info',
          summary: 'Erro',
          detail: error,
        });
      },
    });
  }
}

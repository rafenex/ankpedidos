import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Produto, PageEvent, ColsProduct } from 'src/app/models/api';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {
  constructor(private produtoService: ProdutoService) {}

  cols = ColsProduct;
  products: Produto[] = [];
  first: number = 0;
  rows: number = 5;
  totalRecords: number = 5;
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
}

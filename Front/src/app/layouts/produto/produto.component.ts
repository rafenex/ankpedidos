import { Component } from '@angular/core';
import { Column, Produto } from 'src/app/models/api';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {
  constructor(private produtoService: ProdutoService) {}
  products: Produto[] = [];
  cols!: Column[];

  ngOnInit() {
    this.produtoService.getAllProdutos().subscribe((response) => {
      this.products = response;
    });

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'valorPadrao', header: 'Valor' },
      { field: 'categoria', header: 'Categoria' },
    ];
  }
}

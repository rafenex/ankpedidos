import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/api';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent {
  categorias: Categoria[] = [];
  selectedCategoria!: Categoria;
  preco = 0;
  visible = false;
  nome = '';
  showDialog() {
    this.visible = !this.visible;
  }

  constructor(private produtoService: ProdutoService) {}
  ngOnInit() {
    this.produtoService.getAllCategorias().subscribe((response: any) => {
      this.categorias = response;
    });
  }

  selecionarCategoria($event: Categoria) {
    this.selectedCategoria = $event;
  }

  salvar() {
    const paylod = {
      nome: this.nome,
      valorPadrao: this.preco,
      categoria: this.selectedCategoria.id,
    };
    this.produtoService.saveProduto(paylod);
  }
}

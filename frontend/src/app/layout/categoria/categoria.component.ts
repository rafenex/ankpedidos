import { Component } from '@angular/core';
import { CategoriaResponse } from '../../models/categoria/categoria';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  constructor(
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  categorias$!: Observable<CategoriaResponse[]>;
  categoriaEdit = {} as CategoriaResponse;
  displayedColumns = ['nome', 'acoes'];
  openDialog = false;

  showFormDialog(show: boolean, categoria?: CategoriaResponse) {
    this.categoriaEdit = {} as CategoriaResponse;
    if (categoria) {
      this.categoriaEdit = categoria;
    }
    this.openDialog = show;
  }

  getCategorias() {
    this.categorias$ = this.categoriaService.getCategorias();
  }

  updateCategoria(categoria: CategoriaResponse) {
    this.categoriaService.updateCategoria(categoria).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Categoria editada',
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao editar categoria',
        });
      },
    });
  }

  addCategoria(categoria: CategoriaResponse) {
    this.categoriaService.addCategoria(categoria).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Categoria adicionada',
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao adicionar categoria',
        });
      },
    });
  }

  deleteCategoria(categoria: CategoriaResponse) {
    this.categoriaService.deleteCategoria(categoria.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Categoria removida',
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro: ' + error.status,
          detail: 'Ocorreu um erro ao deletar categoria',
        });
      },
    });
  }

  deleteDialog(event: Event, categoria: CategoriaResponse) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover a categoria ${categoria.nome}?`,
      header: 'Confirmação de remoção',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deleteCategoria(categoria);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejeitado',
          detail: 'Você rejeitou a ação',
        });
      },
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }
}

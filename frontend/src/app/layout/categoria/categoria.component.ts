import { Component } from "@angular/core";
import { CategoriaResponse } from "../../models/categoria/categoria";
import { ConfirmationService, MessageService } from "primeng/api";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styleUrl: "./categoria.component.scss",
})
export class CategoriaComponent {
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  categorias: CategoriaResponse[] = [];
  categoriaEdit = {} as CategoriaResponse;
  displayedColumns = ["nome", "acoes"];
  openDialog = false;
  totalElements: number = 0;
  params: any = {
    nome: null,
    page: 0,
    size: 5,
  };

  showFormDialog(show: boolean, categoria?: CategoriaResponse) {
    this.categoriaEdit = {} as CategoriaResponse;
    if (categoria) {
      this.categoriaEdit = categoria;
    }
    this.openDialog = show;
  }

  handleFilter() {
    this.params.page = 0;
    this.params.size = 5;
    this.getCategorias();
  }

  getCategorias() {
    this.apiService
      .get<CategoriaResponse[]>(`/categorias?`, this.params)
      .subscribe((res: any) => {
        this.categorias = res.content;
        this.totalElements = res.totalElements;
      });
  }

  updateCategoria(categoria: CategoriaResponse) {
    this.apiService.put("/categorias", categoria.id, categoria).subscribe({
      next: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmado",
          detail: "Categoria editada",
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro: " + error.status,
          detail: "Ocorreu um erro ao editar categoria",
        });
      },
    });
  }

  addCategoria(categoria: CategoriaResponse) {
    this.apiService.post("/categorias", categoria).subscribe({
      next: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmado",
          detail: "Categoria adicionada",
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro: " + error.status,
          detail: "Ocorreu um erro ao adicionar categoria",
        });
      },
    });
  }

  deleteCategoria(categoria: CategoriaResponse) {
    this.apiService.delete("/categorias", categoria.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmado",
          detail: "Categoria removida",
        });
        this.getCategorias();
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro: " + error.status,
          detail: "Ocorreu um erro ao deletar categoria",
        });
      },
    });
  }

  deleteDialog(event: Event, categoria: CategoriaResponse) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover a categoria ${categoria.nome}?`,
      header: "Confirmação de remoção",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.deleteCategoria(categoria);
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejeitado",
          detail: "Você rejeitou a ação",
        });
      },
    });
  }

  pageChange(event: any) {
    this.params.page = event.first / event.rows;
    this.params.size = event.rows;
    this.getCategorias();
  }

  ngOnInit(): void {
    this.getCategorias();
  }
}

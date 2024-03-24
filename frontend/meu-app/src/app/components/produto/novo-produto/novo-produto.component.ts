import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto, ProdutoForm } from '../../../models/produto/produto';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriaResponse } from '../../../models/categoria/categoria';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.scss',
})
export class NovoProdutoComponent {
  @Output() newProdutoEvent = new EventEmitter<any>();
  @Output() updateProdutoEvent = new EventEmitter<any>();
  @Input() visible: boolean = false;
  @Input() produtoEdit = {} as any;
  @Output() closeDialogEvent = new EventEmitter<any>();
  @Input() categorias = [] as CategoriaResponse[];

  constructor(private fb: FormBuilder) {}
  categoriaProdutoEdit = {} as CategoriaResponse;
  errorMessage = 'Digite um nome válido';
  headerTitle: string = 'Novo Produto';
  buttonSaveTitle = 'Salvar';
  userForm = this.fb.group({
    nome: ['', Validators.required],
    referencia: ['', Validators.required],
    valorPadrao: [1, Validators.required],
    categoria: [0, Validators.required],
  });

  closeDialog() {
    this.closeDialogEvent.emit(false);
    this.produtoEdit = {} as Produto;
  }

  onSubmit() {
    if (this.produtoEdit.nome == undefined) {
      this.addProduto();
    } else {
      this.updateProduto();
    }
  }

  updateProduto() {
    let formData = this.userForm.value as any;
    formData.id = this.produtoEdit.id;
    formData.nome = formData.nome.toUpperCase();
    this.updateProdutoEvent.emit(formData);
    this.closeDialog();
  }

  addProduto() {
    let formData = this.userForm.value as ProdutoForm;
    formData.nome = formData.nome.toUpperCase();
    this.newProdutoEvent.emit(formData);
    this.closeDialog();
  }

  ngOnInit(): void {
    if (this.produtoEdit.nome != undefined) {
      this.headerTitle = 'Editar Produto';
      this.buttonSaveTitle = 'Editar';
      this.categoriaProdutoEdit =
        this.categorias.find(
          (cat: CategoriaResponse) => cat.nome === this.produtoEdit.categoria
        ) ?? this.categorias[0];

      this.userForm.setValue({
        nome: this.produtoEdit.nome,
        referencia: this.produtoEdit.referencia,
        valorPadrao: this.produtoEdit.valorPadrao,
        categoria: this.categoriaProdutoEdit!.id,
      });
    }
  }
}

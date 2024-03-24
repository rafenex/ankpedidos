import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  CategoriaRequest,
  CategoriaResponse,
} from '../../../models/categoria/categoria';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrl: './nova-categoria.component.scss',
})
export class NovaCategoriaComponent {
  @Output() newCategoriaEvent = new EventEmitter<any>();
  @Output() updateCategoriaEvent = new EventEmitter<any>();

  @Input() visible: boolean = false;

  @Input() categoriaEdit = {} as CategoriaResponse;
  @Output() closeDialogEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  errorMessage = 'Digite um nome válido';
  headerTitle: string = 'Nova Categoria';
  buttonSaveTitle = 'Salvar';
  userForm = this.fb.group({
    nome: ['', Validators.required],
  });

  closeDialog() {
    this.closeDialogEvent.emit(false);
    this.categoriaEdit = {} as CategoriaResponse;
  }

  onSubmit() {
    if (this.categoriaEdit.id == undefined) {
      this.addCategoria();
    } else {
      this.updateCategoria();
    }
  }

  updateCategoria() {
    let formData = this.userForm.value as CategoriaResponse;
    formData.id = this.categoriaEdit.id;
    formData.nome = formData.nome.toUpperCase();
    this.updateCategoriaEvent.emit(formData);
    this.closeDialog();
  }

  addCategoria() {
    let formData = this.userForm.value as CategoriaRequest;
    formData.nome = formData.nome.toUpperCase();
    this.newCategoriaEvent.emit(formData);
    this.closeDialog();
  }

  ngOnInit(): void {
    if (this.categoriaEdit.nome != undefined) {
      this.headerTitle = 'Editar Categoria';
      this.buttonSaveTitle = 'Editar';
      this.userForm.setValue({
        nome: this.categoriaEdit.nome,
      });
    }
  }
}

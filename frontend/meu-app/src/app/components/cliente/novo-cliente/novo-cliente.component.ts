import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente/cliente';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrl: './novo-cliente.component.scss',
})
export class NovoClienteComponent {
  @Output() newClienteEvent = new EventEmitter<any>();
  @Output() updateClienteEvent = new EventEmitter<any>();
  @Input() visible: boolean = false;
  @Input() clienteEditInput = {} as any;
  @Output() closeDialogEvent = new EventEmitter<any>();
  @Input() clientes = [] as Cliente[];

  constructor(private fb: FormBuilder) {}
  clienteEdit = {} as Cliente;
  errorMessage = 'Digite um nome válido';
  headerTitle: string = 'Novo Produto';
  buttonSaveTitle = 'Salvar';
  userForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    endereco: [''],
    telefone: ['', Validators.required],
  });

  closeDialog() {
    this.closeDialogEvent.emit(false);
    this.clienteEditInput = {} as Cliente;
  }

  onSubmit() {
    if (this.clienteEditInput.nome == undefined) {
      this.addCliente();
    } else {
      this.updateCliente();
    }
  }

  updateCliente() {
    let formData = this.userForm.value as any;
    formData.id = this.clienteEditInput.id;
    formData.nome = formData.nome.toUpperCase();
    this.updateClienteEvent.emit(formData);
    this.closeDialog();
  }

  addCliente() {
    let formData = this.userForm.value as Cliente;
    formData.nome = formData.nome.toUpperCase();
    this.newClienteEvent.emit(formData);
    this.closeDialog();
  }

  ngOnInit(): void {
    if (this.clienteEditInput.nome != undefined) {
      this.headerTitle = 'Editar Cliente';
      this.buttonSaveTitle = 'Editar';
      this.userForm.setValue({
        nome: this.clienteEditInput.nome,
        cpf: this.clienteEditInput.cpf,
        endereco: this.clienteEditInput.endereco,
        telefone: this.clienteEditInput.telefone,
      });
    }
  }
}

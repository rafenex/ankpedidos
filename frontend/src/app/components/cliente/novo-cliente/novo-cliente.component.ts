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
  isCnpj = true;
  clienteEdit = {} as Cliente;
  errorMessage = 'Digite um valor válido';
  headerTitle: string = 'Novo Produto';
  buttonSaveTitle = 'Salvar';
  selectedDocType: any = { name: 'CNPJ', key: 'cnpj' };
  tiposCliente: any[] = [
    { name: 'CPF', key: 'cpf' },
    { name: 'CNPJ', key: 'cnpj' },
  ];

  userForm = this.fb.group({
    nome: ['', Validators.required],
    cpfcnpj: [
      '',
      [
        !this.isCnpj ? Validators.required : Validators.nullValidator,
        Validators.pattern(
          /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/
        ),
      ],
    ],

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
    formData.tipo = this.selectedDocType.name == 'CPF' ? 'PF' : 'PJ';
    formData.nome = formData.nome.toUpperCase();
    this.updateClienteEvent.emit(formData);
    this.closeDialog();
  }

  addCliente() {
    let formData = this.userForm.value as Cliente;
    formData.tipo = this.selectedDocType.name == 'CPF' ? 'PF' : 'PJ';
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
        cpfcnpj: this.clienteEditInput.cpfcnpj,
        endereco: this.clienteEditInput.endereco,
        telefone: this.clienteEditInput.telefone,
      });
      this.selectedDocType =
        this.clienteEditInput.tipo === 'PF'
          ? this.tiposCliente[0]
          : this.tiposCliente[1];
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  @Output() onRemoveProduto = new EventEmitter<boolean>();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  removeDialog() {
    this.confirmationService.confirm({
      message: 'Ter certeza que deseja remover o produto?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onRemoveProduto.emit();
        this.confirmationService.close();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Não removido',
              detail: 'Você rejeitou',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Você cancelou',
            });
            break;
          default:
          // Lidar com outros casos, se necessário
        }
        this.confirmationService.close();
      },
    });
  }
}

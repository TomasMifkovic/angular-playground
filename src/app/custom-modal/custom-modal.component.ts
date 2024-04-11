import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent, ModalComponentData } from './modal/modal.component';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
})
export class CustomModalComponent {
  private readonly dialog = inject(MatDialog);

  @ViewChild('modalContentTemplate') modalTemplate!: TemplateRef<any>;

  openSmallDialog() {
    this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
      data: {
        title: 'Modal title',
        template: this.modalTemplate,
      } as ModalComponentData,
    });
  }
}

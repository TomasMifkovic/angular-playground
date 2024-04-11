import { Component, TemplateRef, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ModalComponentData {
  title: string;
  template: TemplateRef<any>;
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  public readonly data: ModalComponentData = inject(MAT_DIALOG_DATA);
  private readonly dialogRef: MatDialogRef<typeof this> = inject(MatDialogRef);

  close() {
    this.dialogRef.close();
  }
}

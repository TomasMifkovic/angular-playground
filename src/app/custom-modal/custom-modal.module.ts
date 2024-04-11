import { NgModule } from '@angular/core';

import { CustomModalComponent } from './custom-modal.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

const components = [CustomModalComponent, ModalComponent];

@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class CustomModalModule {}

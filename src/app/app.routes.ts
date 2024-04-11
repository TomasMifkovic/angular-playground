import { Routes } from '@angular/router';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

export const routes: Routes = [
  {
    path: '',
    component: CustomFormControlComponent,
  },
  {
    path: 'modal',
    component: CustomModalComponent,
  },
];

import { Directive, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class BaseControlDirective {
  parentFormGroup = inject(ControlContainer);

  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }
}

import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'input-wrapper',
  templateUrl: 'input-wrapper.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class InputWrapperComponent implements OnInit, OnDestroy {
  @Input({required: true}) key!: string;

  parentFormGroup = inject(ControlContainer);

  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }

  ngOnInit(): void {
    this.formGroup.addControl(
      this.key,
      new FormControl('', [Validators.required, Validators.minLength(5)])
    );
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl(this.key);
  }
}

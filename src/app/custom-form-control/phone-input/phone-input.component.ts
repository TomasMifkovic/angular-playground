import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'phone-input',
  templateUrl: 'phone-input.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class PhoneInputComponent implements OnInit, OnDestroy {
  @Input({ required: true }) key!: string;
  @Input({ required: true }) label!: string;

  parentFormGroup = inject(ControlContainer);

  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }

  ngOnInit(): void {
    this.formGroup.addControl(
      this.key,
      new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ])
    );
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl(this.key);
  }
}

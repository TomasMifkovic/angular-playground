import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, Validators } from '@angular/forms';
import { BaseControlDirective } from '../base-control.directive';

@Component({
  selector: 'phone-input',
  templateUrl: 'phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class PhoneInputComponent
  extends BaseControlDirective
  implements OnInit, OnDestroy
{
  @Input({ required: true }) key!: string;
  @Input({ required: true }) label!: string;

  get control() {
    return this.formGroup.get(this.key)!;
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

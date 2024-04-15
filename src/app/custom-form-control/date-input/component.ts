import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { BaseControlDirective } from '../base-control.directive';
import { ControlContainer, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'date-input',
  templateUrl: './component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class DateInputComponent
  extends BaseControlDirective
  implements OnInit, OnDestroy
{
  @Input({ required: true }) inputKey!: string;
  @Input({ required: true }) checkboxKey!: string;
  @Input({ required: true }) inputLabel!: string;
  @Input({ required: true }) checkboxLabel!: string;

  ngOnInit(): void {
    this.formGroup.addControl(
      this.inputKey,
      new FormControl(null, [Validators.required])
    );

    this.formGroup.addControl(
      this.checkboxKey,
      new FormControl<boolean>(false, [Validators.required])
    );

    this.formGroup.controls[this.checkboxKey].valueChanges.subscribe(
      (value) => {
        if (value) {
          this.formGroup.controls[this.inputKey].setValue('Unknown');
          this.formGroup.controls[this.inputKey].disable();
        } else {
          this.formGroup.controls[this.inputKey].enable();
          this.formGroup.controls[this.inputKey].setValue(null);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl(this.inputKey);
    this.formGroup.removeControl(this.checkboxKey);
  }
}

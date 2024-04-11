import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { BaseControlDirective } from '../base-control.directive';

@Component({
  selector: 'nationality-input',
  templateUrl: './nationality-input.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class NationalityInputComponent
  extends BaseControlDirective
  implements OnInit, OnDestroy
{
  items = [
    {
      id: 1,
      value: 'Slovakia',
    },
    {
      id: 2,
      value: 'Czech Republic',
    },
    {
      id: 3,
      value: 'Austria',
    },
  ];

  get formArray() {
    return this.formGroup.get('nationalities') as FormArray;
  }

  get nationalityControls() {
    return (this.formGroup.get('nationalities') as FormArray)
      .controls as FormControl[];
  }

  ngOnInit(): void {
    this.formGroup.addControl(
      'nationalities',
      new FormArray([new FormControl(null, [Validators.required])])
    );
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl('nationalities');
  }

  addControl() {
    this.formArray.push(new FormControl(null, [Validators.required]));
  }

  removeControl(i: number) {
    this.formArray.removeAt(i);
  }
}

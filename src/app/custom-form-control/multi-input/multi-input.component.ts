import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { BaseControlDirective } from '../base-control.directive';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'multi-input',
  templateUrl: './multi-input.component.html',
  styleUrl: './multi-input.component.scss',
})
export class MultiInputComponent
  extends BaseControlDirective
  implements OnInit, OnDestroy
{
  @Input({ required: true }) key!: string;
  @Input({ required: true }) heading!: string;
  @Input({ required: true }) addButtonLabel!: string;
  @Input({ required: true }) newFormGroupFactory!: () => FormGroup;
  @Input({ required: true }) displayFn!: (
    value: Record<string, any>
  ) => Array<{ label: string; value: string }>;

  @ContentChild('formTemplate') formTemplateRef: TemplateRef<any> | null = null;

  countOfFilledForms = 0;
  addMode = false;
  editMode: Record<number, any> = {};

  get formArray() {
    return this.formGroup.get(this.key) as FormArray;
  }

  get innerFormGroups() {
    return this.formArray.controls as FormGroup[];
  }

  ngOnInit(): void {
    this.formGroup.addControl(this.key, new FormArray([]));
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl(this.key);
  }

  add(index: number) {
    this.innerFormGroups[index].updateValueAndValidity();
    if (this.innerFormGroups[index].invalid) {
      this.innerFormGroups[index].markAllAsTouched();
      return;
    }

    if (this.editMode[index]) {
      this.editMode[index] = undefined;
    } else {
      this.addMode = false;
      this.countOfFilledForms = this.innerFormGroups.length;
    }
  }

  edit(index: number) {
    this.editMode[index] = this.innerFormGroups[index].value;
  }

  cancel(index: number) {
    if (this.editMode[index]) {
      this.innerFormGroups[index].patchValue(this.editMode[index]);
      this.editMode[index] = undefined;
      return;
    }
    this.addMode = false;
    this.removeControl(index);
  }

  addControl() {
    this.addMode = true;
    this.formArray.push(this.newFormGroupFactory());
  }

  removeControl(i: number) {
    this.formArray.removeAt(i);
    this.countOfFilledForms = this.addMode
      ? this.innerFormGroups.length - 1
      : this.innerFormGroups.length;
  }
}

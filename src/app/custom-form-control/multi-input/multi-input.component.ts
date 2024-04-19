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

  @ContentChild('formTemplate') formTemplateRef: TemplateRef<any> | null = null;
  @ContentChild('displayTemplate') displayTemplateRef: TemplateRef<any> | null =
    null;

  addForm: null | FormGroup = null;
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

  save(index: number) {
    this.innerFormGroups[index].updateValueAndValidity();
    if (this.innerFormGroups[index].invalid) {
      this.innerFormGroups[index].markAllAsTouched();
      return;
    }

    this.editMode[index] = undefined;
  }

  saveAdd() {
    if (!this.addForm) return;
    this.addForm.updateValueAndValidity();

    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    this.formArray.push(this.addForm);
    this.addForm = null;
  }

  edit(index: number) {
    this.editMode[index] = this.innerFormGroups[index].value;
  }

  cancel(index: number) {
    this.innerFormGroups[index].patchValue(this.editMode[index]);
    this.editMode[index] = undefined;
  }

  cancelAdd() {
    this.addForm = null;
  }

  addControl() {
    this.addForm = this.newFormGroupFactory();
  }

  removeControl(i: number) {
    this.formArray.removeAt(i);
  }
}

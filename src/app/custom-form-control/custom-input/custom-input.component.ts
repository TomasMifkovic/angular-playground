import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: 'custom-input.component.html',
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input({required: true}) inputId!: string;
  @Input({required: true}) label!: string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  value: string = '';
  isDisabled = false;
  onChange: ((value: string) => void) | undefined;
  onTouched: ((value: string) => void) | undefined;

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  updateValue(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.writeValue(newValue);
    this.onChange?.(newValue);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'custom-form-control',
  templateUrl: 'custom-form-control.component.html',
})
export class CustomFormControlComponent implements OnInit {
  public form = new FormGroup({
    firstname: new FormControl('', {
      updateOn: 'blur',
      validators: [Validators.required, Validators.minLength(5)],
    }),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public value = this.form.getRawValue();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      (_) => (this.value = this.form.getRawValue())
    );
  }

  submit() {
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    console.log(this.form.getRawValue());
  }
}

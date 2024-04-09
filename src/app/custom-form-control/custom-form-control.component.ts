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
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((_) =>
      console.log(this.form.getRawValue())
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

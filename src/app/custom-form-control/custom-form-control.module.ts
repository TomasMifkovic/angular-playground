import { NgModule } from '@angular/core';

import { CustomFormControlComponent } from './custom-form-control.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';

const components = [CustomFormControlComponent, CustomInputComponent, InputWrapperComponent];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [...components],
    declarations: [...components],
    providers: [],
})
export class CustomFormControlModule { }

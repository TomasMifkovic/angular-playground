import { NgModule } from '@angular/core';

import { CustomFormControlComponent } from './custom-form-control.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const components = [CustomFormControlComponent, CustomInputComponent];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [...components],
    declarations: [...components],
    providers: [],
})
export class CustomFormControlModule { }

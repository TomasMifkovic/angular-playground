import { NgModule } from '@angular/core';

import { CustomFormControlComponent } from './custom-form-control.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { NationalityInputComponent } from './nationality-input/nationality-input.component';
import { NationalityService } from './nationality-input/nationality.service';

const components = [CustomFormControlComponent, CustomInputComponent, PhoneInputComponent, NationalityInputComponent];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [...components],
    declarations: [...components],
    providers: [NationalityService],
})
export class CustomFormControlModule { }

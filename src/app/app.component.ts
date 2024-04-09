import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomFormControlModule } from './custom-form-control/custom-form-control.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomFormControlModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-playground';
}

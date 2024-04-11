import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomFormControlModule } from './custom-form-control/custom-form-control.module';
import { CustomModalModule } from './custom-modal/custom-modal.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomFormControlModule, CustomModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-playground';
}

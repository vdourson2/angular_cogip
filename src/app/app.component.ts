import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyDisplayComponent } from './data/company-display/company-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cogip-ng17';
}

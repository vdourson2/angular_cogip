import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './data/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cogip-ng17';
}

import { Component } from '@angular/core';
import { CompanyFormComponent } from '../company-form/company-form.component';
import { Company } from '../company';

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [CompanyFormComponent],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent {
  

}

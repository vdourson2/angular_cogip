import { Component, Input, OnInit, inject } from '@angular/core';
import { Company } from '../company';
import { CompanyFormComponent } from '../company-form/company-form.component';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-update-company',
  standalone: true,
  imports: [CompanyFormComponent],
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.scss'
})
export class UpdateCompanyComponent implements OnInit{

  @Input() id = -1;
  company!: Company;
  private companyService = inject( CompanyService);

  ngOnInit(): void {
    const idCompany = 
    this.companyService.getCompanyById(this.id).subscribe();
  }

}

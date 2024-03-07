import { Component, Input, OnInit, inject } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent implements OnInit{

  company: Company | undefined;
  private companyService = inject(CompanyService);

  @Input() id = -1;

  ngOnInit(){
    this.companyService.getCompanyById(this.id).subscribe(company => this.company = company);
  }

}

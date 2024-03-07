import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { RouterLink } from '@angular/router';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterLink, CompanyDetailsComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  listCompanies : Company[] = [];
  private companyService = inject(CompanyService);
  //private router = inject(Router);

  constructor(){}

  ngOnInit(): void {
      this.companyService.getCompaniesList().subscribe(listCompanies => this.listCompanies = listCompanies);
  }

  // goToCompanyDetails(companyId: number){
  //   this.router.navigate(['company', companyId]);
  // }
}

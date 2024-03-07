import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss'
})
export class CompanyFormComponent {

  @Input({required: true}) company!: Company;
  private companyService = inject(CompanyService);
  private router = inject(Router);

  handleSubmit() {
    this.companyService.addCompany(this.company).subscribe((company) => {
      if (!company) return console.log("Error while adding company");
      this.company = company;
      console.log("Company added");
      console.table(company);
      this.router.navigate(['/company',this.company.id])
    })
  }
}

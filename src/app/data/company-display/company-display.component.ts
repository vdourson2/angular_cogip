import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../data.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-display',
  standalone: true,
  imports: [],
  templateUrl: './company-display.component.html',
  styleUrl: './company-display.component.scss'
})
export class CompanyDisplayComponent {

  listCompanies : Company[] = [];
  private dataService = inject(DataService);

  constructor(){}

  ngOnInit(): void {
      this.dataService.getCompaniesList().subscribe(listCompanies => this.listCompanies = listCompanies);
  }

}

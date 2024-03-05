import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Company } from '../company';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss'
})
export class CompanyFormComponent implements OnInit{

  company!: Company;

  ngOnInit () {
    this.company = new Company();
  }

  handleSubmit() {
    console.log("Form submited");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompaniesList(): Observable<Company[]>{
    return this.http.get<Company[]>('/api/company').pipe( 
      tap((listCompanies)=> console.table(listCompanies)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getCompanyById(companyId: number): Observable<Company|undefined>{
    return this.http.get<Company>(`/api/company/${companyId}`).pipe(
      tap((company)=> console.table(company)),
      catchError((error) => {
        console.log(`Error while fetching company with id ${companyId}`);
        console.log(error);
        return of(undefined);
      })
    )
  }

 
}

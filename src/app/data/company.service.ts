import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCompanyById(companyId: number): Observable<Company | undefined>{
    return this.http.get<Company>(`/api/company/${companyId}`).pipe(
      tap((company)=> console.table(company)),
      catchError((error) => {
        console.log(`Error while fetching company with id ${companyId}`);
        console.log(error);
        return of(undefined);
      })
    )
  }

  addCompany(company: Company): Observable<Company | undefined>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<Company>('/api/company', company, httpOptions).pipe(
      tap((company)=> console.table(company)),
      catchError((error) => {
        console.log(`Error while adding company`);
        console.log(error);
        return of(undefined);
      })
    );     
  }

  deleteCompany(idCompany: number|undefined): Observable<null | undefined>{
    return this.http.delete<null>(`/api/company/${idCompany}`).pipe(
      tap((response)=> console.table(response)),
      catchError((error) => {
        console.log(`Error while deleting company with id ${idCompany}`);
        console.log(error);
        return of(undefined);
      })
    )
  }

  

 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCompaniesList(): Observable<any>{
    return this.http.get<any>('/api/company').pipe( 
      tap((listCompanies)=> console.table(listCompanies)),
      catchError((error) => {
        console.log(error);
        return of([]);
      }));
  }
}

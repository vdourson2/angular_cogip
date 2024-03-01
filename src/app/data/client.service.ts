import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http = inject(HttpClient);

  getContactList(): Observable<Contact[]>{
    return this.http.get<Contact[]>('/api/contact').pipe(
      tap((listContacts)=> console.table(listContacts)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    )
  }
}

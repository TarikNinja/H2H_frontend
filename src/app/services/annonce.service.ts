import { Injectable } from '@angular/core';
import { Annonce } from '../annonce';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:8080/api/annonce/getAllAnnonces';
  private apiUrl2 = 'http://localhost:8080/api/annonce/getAnnoncesNonReservees';

  constructor(private http: HttpClient) {}

  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }

  getAnnoncesNonReservees(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl2);
  }

}

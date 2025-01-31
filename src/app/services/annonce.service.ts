import { Injectable } from '@angular/core';
import { Annonce } from '../annonce';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:8080/api/annonce';

  constructor(private http: HttpClient) {}

  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/getAllAnnonces`);
  }

  getAnnoncesNonReservees(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/getAnnoncesNonReservees`);
  }

  getAnnoncesByCategorie(idCategorie: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/getAnnoncesByCategorie/${idCategorie}`);
  }
}

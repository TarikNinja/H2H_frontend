import { Injectable } from '@angular/core';
import {Annonce} from '../annonce';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  private baseUrl = 'http://localhost:8080/api/annonce';

  constructor(private http: HttpClient) {}

  searchAnnonces(keyword: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/searchAnnonces/${keyword}`);
  }
}

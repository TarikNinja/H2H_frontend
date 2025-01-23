import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthResponse} from '../auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/user/authenticate'; // URL de votre backend

  constructor(private http: HttpClient) { }
  authenticate(email: string, password: string): Observable<AuthResponse> {
    const body = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post<AuthResponse>(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}

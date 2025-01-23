import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:8080/api/user/register';
  constructor(private http: HttpClient) { }

  registerUser(userData: any, file?: File): Observable<any> {
    const formData: FormData = new FormData();

    // Ajoutez les données utilisateur au FormData
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });

    // Ajoutez le fichier si présent
    if (file) {
      formData.append('file', file);
    }

    return this.http.post(this.apiUrl, formData);
  }
}

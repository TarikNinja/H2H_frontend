import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:8080/api/images'; // URL de base pour accéder aux images

  constructor(private http: HttpClient) {}

  getImageData(imageName: string): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.apiUrl}/objets/${imageName}`, {
      observe: 'response',
      responseType: 'blob'
    });
  }
}

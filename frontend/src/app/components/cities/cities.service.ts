import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Cities } from './cities.model';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  baseUrl = "http://localhost:3001/cities"

  constructor( private http: HttpClient) { 
  }

  read(): Observable<Cities[]> {
      return this.http.get<Cities[]>(this.baseUrl)
  }
}

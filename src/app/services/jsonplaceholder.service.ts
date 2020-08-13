import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  
  constructor(private http:HttpClient) { }
  
  getData(): Observable<any> {
    const url = 'https://run.mocky.io/v3/0dfde0ed-6a93-4e20-bfc0-e60a1574195e';
    return this.http.get<any>(url);
  }

}

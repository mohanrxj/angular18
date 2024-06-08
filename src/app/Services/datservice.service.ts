import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatserviceService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = 'https://api.restful-api.dev/objects';
    return this.http.get<any>(url);
  }
}

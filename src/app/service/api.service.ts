import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:5000/cliente'

  constructor(private http: HttpClient) {
    
  }

  saveData(data: any) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

    return this.http.post(this.apiUrl, data, {headers})
  }
}

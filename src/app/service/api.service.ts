import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:5000/cliente'

  constructor(private http: HttpClient) { }

  saveData(data:any){
    return this.http.post(this.apiUrl,data)
  }
}

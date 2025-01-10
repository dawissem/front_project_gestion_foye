import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export interface UserData{
  email:string;
  age:number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) { }

  login(userData:any):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/login`,userData); 
  }
  

}

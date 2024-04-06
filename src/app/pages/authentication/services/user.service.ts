import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { LoginInterFace } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl=environment.api;
  constructor(private httpc: HttpClient) { }
  login(body) : Observable<LoginInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<LoginInterFace>(this.baseUrl+"User/authenticate", body, { headers: headers });
  }
}

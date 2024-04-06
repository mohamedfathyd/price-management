import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginInterFace } from '../../authentication/models/login-model';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenService {
  private baseUrl = environment.api;
  constructor(private httpc: HttpClient) { }
  refreshToken(body): Observable<LoginInterFace> {
    let headers = new HttpHeaders();
    headers.append("No-Auth", "True");
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<LoginInterFace>(this.baseUrl + "User/RefreshToken", body, { headers: headers });
  }
  request(body): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<any>(this.baseUrl + "User/authenticate", body, { headers: headers });
  }
  requestSubmit(body): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<any>(this.baseUrl + "User/authenticate", body, { headers: headers });
  }
}
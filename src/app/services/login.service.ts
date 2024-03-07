import { Injectable } from '@angular/core';
import { BASE_URL } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl : string = "";

  constructor(private _http: HttpClient)
  {
    this._baseUrl = BASE_URL;
  }

  methodPost(payload: any): Observable<any>{
    return this._http.post<any>(`${this._baseUrl}/usuarios/login`, payload)
  }

  methodGet(): Observable<any>{
    return this._http.get<any>(`${this._baseUrl}/usuarios/login`)
  }

  methodGetById(id:any): Observable<any>{
    return this._http.get<any>(`${this._baseUrl}/usuarios/login/${id}`)
  }

  methodPut(payload: any): Observable<any>{
    return this._http.put<any>(`${this._baseUrl}/usuarios/login`, payload)
  }

  methodDelete(payload: any): Observable<any>{
    return this._http.delete<any>(`${this._baseUrl}/usuarios/login`)
  }

}

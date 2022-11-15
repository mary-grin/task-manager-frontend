import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser, IUserAuth} from "../models/iuser";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:5000/api/auth'

  constructor(private http: HttpClient) { }

  register(user: IUserAuth): Observable<IUser> {
    const {username, password} = user;
    return this.http.post<IUser>(`${this.url}/register`, {username, password}, {withCredentials: true});
  }

  login(user: IUserAuth): Observable<IUser> {
    const {username, password} = user;
    return this.http.post<IUser>(`${this.url}/login`, {username, password}, {withCredentials: true});
  }

  getUserInfo(): Observable<IUser> {
    return this.http.get<IUser>(this.url, {withCredentials: true});
  }

  logout(): Observable<string> {
    return this.http.post<string>(`${this.url}/logout`, {}, {withCredentials: true});
  }
}

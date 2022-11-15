import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000/api/user'

  constructor(private http: HttpClient) { }

  changeUserPhoto(image: File): Observable<string> {
    const fd = new FormData();
    fd.append('image', image, image.name)
    return this.http.patch<string>(`${this.url}/photo`, fd, {withCredentials: true})
  }

}

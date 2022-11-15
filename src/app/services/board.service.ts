import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {IBoard, IBoardData} from "../models/iboard";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  url: string = 'http://localhost:5000/api/board';

  constructor(private http: HttpClient) { }

  getAllBoards(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>(this.url,{withCredentials: true});
  }

  addBoard(board: IBoardData): Observable<IBoard> {
    const {name, description} = board;
    return this.http.post<IBoard>(this.url, {name, description}, {withCredentials: true});
  }

  editBoard(board: IBoardData): Observable<IBoard> {
    const {name, description, _id} = board;
    return this.http.patch<IBoard>(`${this.url}/${_id}`, {name, description}, {withCredentials: true});
  }

  deleteBoard(id: string): Observable<string> {
    return this.http.delete<string>(`${this.url}/${id}`, {withCredentials: true});
  }

}

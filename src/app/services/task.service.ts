import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask, ITaskData} from "../models/itask";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = 'http://localhost:5000/api/board'

  constructor(private http: HttpClient) { }

  getTasks({id}: {id: string}): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.url}/${id}`);
  }

  addTask(data: {task: ITaskData, id: string}): Observable<ITask> {
    const {task, id} = data;
    return this.http.post<ITask>(`${this.url}/${id}`, {task}, {withCredentials: true});
  }

}

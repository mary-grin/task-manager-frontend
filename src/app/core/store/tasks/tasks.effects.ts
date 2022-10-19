import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {TaskService} from "../../../services/task.service";
import {addTask, addTaskFailed, addTaskSuccess, getTasks, getTasksFailed, getTasksSuccess} from "./tasks.actions";
import {Router} from "@angular/router";

@Injectable()
export class TasksEffects {

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasks),
      switchMap((action) =>
        this.taskService.getTasks(action).pipe(
          map((tasks) => getTasksSuccess({tasks: tasks})),
          catchError((err) =>
            of(getTasksFailed({error: err})))
        )
      ),
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      switchMap((action) =>
        this.taskService.addTask(action).pipe(
          map((task) => addTaskSuccess(task)),
          catchError((err) =>
            of(addTaskFailed({error: err})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private router: Router
  ) {}
}

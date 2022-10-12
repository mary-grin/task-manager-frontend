import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {getUser, getUserFailed, getUserSuccess} from "./user.actions";
import {AuthService} from "../../../services/auth.service";

@Injectable()
export class UserEffects {

  constructor(private authService: AuthService,
              private actions$: Actions) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        this.authService.getUserInfo().pipe(
          map((user) => getUserSuccess(user)),
          catchError((err) =>
            of(getUserFailed({error: err})))
        ))
    )
  );

}

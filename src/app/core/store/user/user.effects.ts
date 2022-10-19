import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {
  changeUserPhoto, changeUserPhotoFailed, changeUserPhotoSuccess,
  getUser,
  getUserFailed,
  getUserSuccess,
  logIn, logInFailed,
  logInSuccess,
  logOut,
  logOutFailed,
  logOutSuccess
} from "./user.actions";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Injectable()
export class UserEffects {

  constructor(private authService: AuthService,
              private userService: UserService,
              private actions$: Actions,
              private router: Router) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        this.authService.getUserInfo().pipe(
          map((user) => getUserSuccess(user)),
          catchError((err) =>
            of(getUserFailed({error: err})))
        )),
      tap(() => this.router.navigate(['/dashboard']))
    )
  );

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      switchMap((action) =>
        this.authService.login(action).pipe(
          map((user) => logInSuccess(user)),
          catchError(err =>
            of(logInFailed({error: err})))
        )),
      tap(() => this.router.navigate(['/dashboard']))
    )
  );

  changePhoto$ = createEffect(() =>
  this.actions$.pipe(
    ofType(changeUserPhoto),
    switchMap((action) =>
    this.userService.changeUserPhoto(action.image).pipe(
      map(path => changeUserPhotoSuccess({path})),
      catchError(err =>
      of(changeUserPhotoFailed({error: err})))
    ))
  ))

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => logOutSuccess()),
          catchError(err =>
            of(logOutFailed({error: err})))
        )),
      tap(() => this.router.navigate(['/auth']))
    )
  );

}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, skipWhile, take} from 'rxjs';
import {Store} from "@ngrx/store";
import {selectUsersList} from "../core/store/user/user.selectors";
import {IUser} from "../models/iuser";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectUsersList).pipe(
      // skipWhile((user: IUser) => user.isLoading),
      take(1),
      map((user: IUser) => {
        return !!user.username ? true : this.router.createUrlTree(['/auth'])
      })
    );
  }
}

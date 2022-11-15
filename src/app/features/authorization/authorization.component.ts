import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {IUserAuth} from "../../models/iuser";
import {Store} from "@ngrx/store";
import {getUser, logIn} from "../../core/store/user/user.actions";

type Mode = 'auth__log-in' | 'auth__sign-up';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  mode: Mode = 'auth__log-in';
  logIn: boolean = true;
  signUp: boolean = false;
  error: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store) { }

  ngOnInit(): void {

  }

  switchToMode(newMode: Mode) {
    this.error = '';
    this.mode = newMode;
    if(newMode === 'auth__log-in') {
      this.logIn = true;
      this.signUp = false;
    } else {
      this.logIn = false;
      this.signUp = true;
    }
  }

  login(auth: { value: IUserAuth, reset():void }) {
    const user = auth.value;
    this.store.dispatch(logIn(user));
    auth.reset();
  }

  signup(auth: { value: IUserAuth, reset():void }) {
    const user = auth.value;
    this.authService.register(user).subscribe({
      next: () => this.error = '',
      error: err => this.error = err.error.message
    });
    auth.reset();
  }

}

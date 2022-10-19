import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IUser} from "./models/iuser";
import {selectUsersList} from "./core/store/user/user.selectors";
import {Subscription} from "rxjs";
import {getUser} from "./core/store/user/user.actions";
import {Router} from "@angular/router";
import {selectBoardItems} from "./core/store/boards/boards.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  isOpenedInfoUser: boolean = false;
  user: IUser;
  private subscription: Subscription;

  constructor(private store: Store,
              private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(getUser());
    this.subscription = this.store.select(selectUsersList).subscribe(value =>
      this.user = value
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openInfoUser() {
    this.isOpenedInfoUser = !this.isOpenedInfoUser;
  }
}

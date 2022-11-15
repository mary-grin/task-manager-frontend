import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {IUser} from "../../../models/iuser";
import {Store} from "@ngrx/store";
import {selectUsersList} from "../../store/user/user.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: IUser;
  url: string = 'http://localhost:5000/'
  @Output() clickOnUser = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectUsersList).subscribe(data => this.user = data);
  }

}

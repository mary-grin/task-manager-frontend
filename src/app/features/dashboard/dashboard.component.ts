import {Component, OnDestroy, OnInit} from '@angular/core';
import {getUser} from "../../core/store/user/user.actions";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {selectUsersList} from "../../core/store/user/user.selectors";
import {FormGroup} from "@angular/forms";
import {addBoard, appLoaded, editBoard, sortBoards} from "../../core/store/boards/boards.actions";
import {IBoard} from "../../models/iboard";
import {selectBoardItems} from "../../core/store/boards/boards.selectors";
import {sortTask} from "../../core/store/tasks/tasks.actions";

interface Sort {
  sort: FormGroup,
  order: FormGroup
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isOpenedCreateForm: boolean = false;
  isOpenedEditForm: boolean = false;
  boards: IBoard[];
  searchText: string = '';
  id: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectUsersList).subscribe(value => {
      if(!value.username) {
        this.store.dispatch(getUser());
      }
    });

    this.store.select(selectBoardItems).subscribe(data => {
      if (!data[0]) {
        this.store.dispatch(appLoaded());
        this.boards = data
      } else {
        this.boards = data
      }
    });
  }

  openAddForm() {
    this.isOpenedCreateForm = !this.isOpenedCreateForm;
  }

  openEditForm() {
    this.isOpenedEditForm = !this.isOpenedEditForm;
  }

  saveIdBoard(id: string) {
    this.id = id;
    this.isOpenedEditForm = !this.isOpenedEditForm;
  }

  addBoard(form: FormGroup) {
    const board = form.value;
    this.store.dispatch(addBoard({board}));
    this.isOpenedCreateForm = false;
  }

  editBoard(form: FormGroup) {
    const board = form.value;
    this.store.dispatch(editBoard({
      name: board.name,
      description: board.description,
      _id: this.id
    }));
    this.isOpenedEditForm = false
  }

  searchBoards(searchText: string) {
    this.searchText = searchText;
  }

  sortBoards({sort, order}: {sort: FormGroup, order: FormGroup}) {
    const {mode} = sort.value;
    const {ordering} = order.value
    this.store.dispatch(sortBoards({mode, ordering}));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

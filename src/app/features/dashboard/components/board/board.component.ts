import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IBoard } from 'src/app/models/iboard';
import {Store} from "@ngrx/store";
import {deleteBoard} from "../../../../core/store/boards/boards.actions";
import {getTasks} from "../../../../core/store/tasks/tasks.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board: IBoard;
  details: boolean = false;
  @Output() editEmitter = new EventEmitter();

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.details = !this.details;
  }

  delete(actual_board: HTMLDivElement) {
    const id = actual_board.id;
    this.store.dispatch(deleteBoard({id}));
  }

  loadTasks(id: string) {
    this.store.dispatch(getTasks({id}));
    this.router.navigate(['/board', this.board._id])
  }
}

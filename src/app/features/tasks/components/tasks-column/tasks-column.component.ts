import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTasksList} from "../../../../core/store/tasks/tasks.selectors";
import {ITask} from "../../../../models/itask";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss']
})
export class TasksColumnComponent implements OnInit, OnDestroy {

  tasks: ITask[];
  subscription: Subscription
  @Input() status: string;
  @Input() searchText: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectTasksList).subscribe(data => this.tasks = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

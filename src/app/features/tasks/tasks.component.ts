import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTasksList} from "../../core/store/tasks/tasks.selectors";
import {ITask} from "../../models/itask";
import {Subscription, take} from "rxjs";
import {addTask, clearTasks, sortTask} from "../../core/store/tasks/tasks.actions";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {selectBoardItem} from "../../core/store/boards/boards.selectors";
import {IBoard} from "../../models/iboard";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  tasks: ITask[];
  board: IBoard | undefined;
  subscription: Subscription;
  searchText: string = '';
  isOpenedCreateForm: boolean = false;

  constructor(private store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(params => {
      const id: string = params['id'];
      this.store.select(selectBoardItem, {id}).subscribe(data => this.board = data);
    })
    this.subscription = this.store.select(selectTasksList).subscribe(data => this.tasks = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(clearTasks());
  }

  openAddForm() {
    this.isOpenedCreateForm = !this.isOpenedCreateForm;
  }

  addTask(form: FormGroup) {
    const task = form.value;
    console.log(task);
    this.store.dispatch(addTask({task, id: this.board!._id}));
    this.isOpenedCreateForm = false;
  }

  sortTasks({sort, order}: {sort: FormGroup, order: FormGroup}) {
    const {mode} = sort.value;
    const {ordering} = order.value
    this.store.dispatch(sortTask({mode, ordering}));
  }

  searchTasks(searchText: string) {
    this.searchText = searchText;
  }
}

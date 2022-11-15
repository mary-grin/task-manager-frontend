import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {sortBoards} from "../../../core/store/boards/boards.actions";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() name: string;
  @Input() isTasks: boolean;
  @Output() addButtonEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchEmitter = new EventEmitter();
  @Output() sortEmitter = new EventEmitter();
  sort: FormGroup;
  order: FormGroup;
  searchText: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sort = new FormGroup({
      mode: new FormControl('createdDate')
    })
    this.order = new FormGroup({
      ordering: new FormControl('ascending')
    })
  }

  sortBoards(sort: FormGroup, order: FormGroup) {
    const {mode} = sort.value;
    const {ordering} = order.value
    this.store.dispatch(sortBoards({mode, ordering}))
  }
}

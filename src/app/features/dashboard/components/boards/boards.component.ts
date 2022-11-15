import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IBoard} from "../../../../models/iboard";
import {Subscription} from "rxjs";
import { Store } from '@ngrx/store';
import {selectBoardItems} from "../../../../core/store/boards/boards.selectors";
import {appLoaded} from "../../../../core/store/boards/boards.actions";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  @Input() boards: IBoard[];
  details: boolean = false;
  subscription: Subscription;
  @Output() editEmitter = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}

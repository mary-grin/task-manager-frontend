import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../../../models/itask";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;
  @Output() openDetailsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

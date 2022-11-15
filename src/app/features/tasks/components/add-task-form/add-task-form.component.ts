import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  @Output() closeAddForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  addTaskForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl('NEW')
    })
  }

}

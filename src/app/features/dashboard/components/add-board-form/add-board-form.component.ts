import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-board-form',
  templateUrl: './add-board-form.component.html',
  styleUrls: ['./add-board-form.component.scss']
})
export class AddBoardFormComponent implements OnInit {

  @Input() title: string;
  @Input() buttonTitle: string;
  @Output() closeAddForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  addBoardForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addBoardForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    })
  }

}

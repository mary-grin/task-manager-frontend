import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  authorization: FormGroup;
  @Output() submitForm = new EventEmitter();
  @Input() buttonName: string;

  constructor() { }

  ngOnInit(): void {
    this.authorization = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }
}

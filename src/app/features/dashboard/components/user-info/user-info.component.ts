import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {changeUserPhoto, logOut} from "../../../../core/store/user/user.actions";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Output() closeUserInfo = new EventEmitter();
  @Input() avatar: string;
  @Input() username: string;
  form: FormGroup
  image: File

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "image": new FormControl()
    })
  }

  logout() {
    this.store.dispatch(logOut());
    this.closeUserInfo.emit();
  }

  onFileUpload(event: any) {
    this.image = event.target.files[0];
    this.store.dispatch(changeUserPhoto({image: this.image}))
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthFormComponent} from "./authorization/components/auth-form/auth-form.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './dashboard/components/boards/boards.component';
import { BoardComponent } from './dashboard/components/board/board.component';
import {SharedModule} from "../shared/shared.module";
import { AddBoardFormComponent } from './dashboard/components/add-board-form/add-board-form.component';
import { UserInfoComponent } from './dashboard/components/user-info/user-info.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskFormComponent } from './tasks/components/add-task-form/add-task-form.component';
import {AppRoutingModule} from "../app-routing.module";
import { TasksColumnComponent } from './tasks/components/tasks-column/tasks-column.component';
import { TaskComponent } from './tasks/components/task/task.component';
import {FilterPipe} from "../pipes/filter.pipe";

@NgModule({
  declarations: [
    AuthorizationComponent,
    AuthFormComponent,
    DashboardComponent,
    BoardsComponent,
    BoardComponent,
    AddBoardFormComponent,
    UserInfoComponent,
    TasksComponent,
    AddTaskFormComponent,
    TasksColumnComponent,
    TaskComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AuthorizationComponent,
    DashboardComponent,
    UserInfoComponent,
    TasksComponent
  ]
})
export class FeaturesModule { }

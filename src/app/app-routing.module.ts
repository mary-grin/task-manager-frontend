import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "./features/authorization/authorization.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";
import {TasksComponent} from "./features/tasks/tasks.component";

const routes: Routes = [
  {path: 'auth', component: AuthorizationComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'board/:id', component: TasksComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

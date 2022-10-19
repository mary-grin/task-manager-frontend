import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import {userReducer} from "./core/store/user/user.reducer";
import {UserEffects} from "./core/store/user/user.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {boardsReducer} from "./core/store/boards/boards.reducer";
import {BoardsEffects} from "./core/store/boards/boards.effects";
import {CoreModule} from "./core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FeaturesModule} from "./features/features.module";
import {tasksReducer} from "./core/store/tasks/tasks.reducer";
import {TasksEffects} from "./core/store/tasks/tasks.effects";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({user: userReducer, boards: boardsReducer, tasks: tasksReducer}),
        EffectsModule.forRoot([UserEffects, BoardsEffects, TasksEffects]),
        HttpClientModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true,
        }),
        CoreModule,
        ReactiveFormsModule,
        FeaturesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TasksState} from "./tasks.state";

export const selectBoards = createFeatureSelector<TasksState>('tasks');

export const selectTasksList = createSelector(selectBoards, (state: TasksState) => state.tasks);

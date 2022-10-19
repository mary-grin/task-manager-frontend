import {createReducer, on} from "@ngrx/store";
import {initialState} from "./tasks.state";
import {addTaskSuccess, clearTasks, getTasksSuccess, sortTask} from "./tasks.actions";
import {ITask} from "../../../models/itask";

export const tasksReducer = createReducer(
  initialState,
  on(getTasksSuccess, (state, {tasks}) => ({tasks})),
  on(addTaskSuccess, (state, task) => ({tasks: [...state.tasks, task]})),
  on(sortTask, (state, {mode, ordering}) => {
    if (ordering === 'ascending') {
      const arrForSort = [...state.tasks]
      return {tasks: sortByAsc(arrForSort, mode)};
    } else if(ordering === 'descending') {
      const arrForSort = [...state.tasks]
      return {tasks: sortByDesc(arrForSort, mode)};
    } else return state;
  }),
  on(clearTasks, () => initialState)
);

function sortByAsc(arr: ITask[], mode: 'createdDate' | 'name') {
  return arr.sort((a, b) =>
    (a[mode] > b[mode]) ? 1 : ((b[mode] > a[mode]) ? -1 : 0))
}

function sortByDesc(arr: ITask[], mode: 'createdDate' | 'name') {
  return arr.sort((a, b) =>
    (a[mode] < b[mode]) ? 1 : ((b[mode] < a[mode]) ? -1 : 0))
}

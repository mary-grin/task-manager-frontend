import {createAction, props} from "@ngrx/store";
import {ITask, ITaskData} from "../../../models/itask";

export const getTasks = createAction(
  '[Task] Get Tasks',
  props<{id: string}>()
);

export const getTasksSuccess = createAction(
  '[Task] Get Tasks Success',
  props<{tasks: ITask[]}>()
);

export const getTasksFailed = createAction(
  '[Task] Get Tasks Failed',
  props<{error: Error}>()
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{task: ITaskData, id: string}>()
);

export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<ITask>()
);

export const addTaskFailed = createAction(
  '[Task] Add Task Failed',
  props<{error: Error}>()
);

export const sortTask = createAction(
  '[Task] Sort Boards',
  props<{mode: 'name' | 'createdDate', ordering: 'ascending' | 'descending'}>()
)

export const clearTasks = createAction(
  '[Task] Clear Tasks'
);

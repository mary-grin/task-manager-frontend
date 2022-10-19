import {ITask} from "../../../models/itask";

export interface TasksState {
  tasks: ITask[]
}

export const initialState: TasksState = {
  tasks: []
}

import {createAction, props} from "@ngrx/store";
import {IBoard} from "../../../models/iboard";

export const appLoaded = createAction(
  '[App] App Loaded'
);

export const addBoard = createAction(
  '[Boards] Add Board',
  props<{board:IBoard}>()
);

export const deleteBoard = createAction(
  '[Boards] Delete Board',
  props<{id: string}>()
)

export const fetchAddBoardSuccess = createAction(
  '[Boards] Add Board Success',
  props<{board:IBoard}>()
);

export const fetchAddBoardFailed = createAction(
  '[Boards] Add Board Failed',
  props<{error: Error, callback: () => void}>()
);

export const fetchDeleteBoardSuccess = createAction(
  '[Boards] Delete Board Success',
  props<{id: string}>()
);

export const fetchDeleteBoardFailed = createAction(
  '[Boards] Delete Board Failed',
  props<{error: Error, callback: () => void}>()
);

export const fetchAllBoardSuccess = createAction(
  '[Boards] Get All Boards Success',
  props<{boards: IBoard[]}>()
);

export const fetchAllBoardFailed = createAction(
  '[Boards] Get All Boards Failed',
  props<{error: Error, callback: () => void}>()
);

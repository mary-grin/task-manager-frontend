import {createAction, props} from "@ngrx/store";
import {IBoard, IBoardData} from "../../../models/iboard";

export const appLoaded = createAction(
  '[App] App Loaded'
);

export const addBoard = createAction(
  '[Boards] Add Board',
  props<{board:IBoardData}>()
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
  props<{error: Error}>()
);

export const fetchDeleteBoardSuccess = createAction(
  '[Boards] Delete Board Success',
  props<{id: string}>()
);

export const fetchDeleteBoardFailed = createAction(
  '[Boards] Delete Board Failed',
  props<{error: Error}>()
);

export const fetchAllBoardSuccess = createAction(
  '[Boards] Get All Boards Success',
  props<{boards: IBoard[]}>()
);

export const fetchAllBoardFailed = createAction(
  '[Boards] Get All Boards Failed',
  props<{error: Error}>()
);

export const editBoard = createAction(
  '[Boards] Edit Board',
  props<IBoardData>()
);

export const editBoardSuccess = createAction(
  '[Boards] Edit Board Success',
  props<IBoard>()
)

export const editBoardFailed = createAction(
  '[Boards] Edit Board Failed',
  props<{error: Error}>()
);

export const sortBoards = createAction(
  '[Boards] Sort Boards',
  props<{mode: 'name' | 'createdDate', ordering: 'ascending' | 'descending'}>()
)

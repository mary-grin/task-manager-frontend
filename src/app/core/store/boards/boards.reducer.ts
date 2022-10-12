import {createReducer, on} from "@ngrx/store";
import {initialState} from "./boards.state";
import {
  fetchAddBoardFailed,
  fetchAddBoardSuccess,
  fetchAllBoardFailed,
  fetchAllBoardSuccess,
  fetchDeleteBoardFailed, fetchDeleteBoardSuccess
} from "./boards.actions";

export const boardsReducer = createReducer(
  initialState,
  on(fetchAllBoardSuccess, (state, {boards}) => ({boards})),
  on(fetchAddBoardSuccess, (state, {board}) => ({boards: [board, ...state.boards]})),
  on(fetchDeleteBoardSuccess, (state, {id}) => {
    state.boards.forEach(item => {
      console.log(item._id, id)
      console.log(item._id == id)
    })
    const indexDel = state.boards.findIndex(item => item._id == id);
    const updatedBoards = state.boards.filter((item, index) => index !== indexDel);
    console.log(indexDel);
    return {boards: [...updatedBoards]};
  }),
  on(fetchAllBoardFailed, (state, {error, callback}) => {
    callback();
    return state;
  }),
  on(fetchAddBoardFailed, (state, {error, callback}) => {
    callback();
    return state;
  }),
  on(fetchDeleteBoardFailed, (state, {error, callback}) => {
    callback();
    return state;
  })
);


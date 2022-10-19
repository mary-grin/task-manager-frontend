import {createReducer, on} from "@ngrx/store";
import {initialState} from "./boards.state";
import {
  editBoardSuccess,
  fetchAddBoardSuccess,
  fetchAllBoardSuccess,
  fetchDeleteBoardSuccess,
  sortBoards
} from "./boards.actions";
import {logOutSuccess} from "../user/user.actions";
import {IBoard} from "../../../models/iboard";

export const boardsReducer = createReducer(
  initialState,
  on(fetchAllBoardSuccess, (state, {boards}) => ({boards})),
  on(fetchAddBoardSuccess, (state, {board}) => ({boards: [board, ...state.boards]})),
  on(fetchDeleteBoardSuccess, (state, {id}) => {
    const indexDel = state.boards.findIndex(item => item._id == id);
    const updatedBoards = state.boards.filter((item, index) => index !== indexDel);
    return {boards: [...updatedBoards]};
  }),
  on(editBoardSuccess, (state, responseBoard) => {
    const indexNewBoard = state.boards.findIndex(board => board._id === responseBoard._id);
    const updatedBoards = [...state.boards];
    updatedBoards[indexNewBoard] = responseBoard
    return {...state, boards: updatedBoards}
  }),
  on(sortBoards, (state, {mode, ordering}) => {
    if (ordering === 'ascending') {
      const arrForSort = [...state.boards]
      return {boards: sortByAsc(arrForSort, mode)};
    } else if(ordering === 'descending') {
      const arrForSort = [...state.boards]
      return {boards: sortByDesc(arrForSort, mode)};
    } else return state;
  }),
  on(logOutSuccess, () => initialState)
);

function sortByAsc(arr: IBoard[], mode: 'createdDate' | 'name') {
  return arr.sort((a, b) =>
    (a[mode] > b[mode]) ? 1 : ((b[mode] > a[mode]) ? -1 : 0))
}

function sortByDesc(arr: IBoard[], mode: 'createdDate' | 'name') {
  return arr.sort((a, b) =>
    (a[mode] < b[mode]) ? 1 : ((b[mode] < a[mode]) ? -1 : 0))
}

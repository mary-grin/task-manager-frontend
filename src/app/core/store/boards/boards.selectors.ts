import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BoardsState} from "./boards.state";

export const selectBoards = createFeatureSelector<BoardsState>('boards');

export const selectBoardItems = createSelector(selectBoards, (state: BoardsState) => state.boards);

export const selectBoardItem = (props: {id: string}) => {
  createSelector(selectBoardItems,
    (boardItems) => boardItems.find(boardItem => boardItem._id === props.id))
}

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BoardsState} from "./boards.state";
import {IBoard} from "../../../models/iboard";

export const selectBoards = createFeatureSelector<BoardsState>('boards');

export const selectBoardItems = createSelector(selectBoards, (state: BoardsState) => state.boards);

export const selectBoardItem = createSelector(selectBoardItems,
    (boardItems: IBoard[], props: { id: string }) => boardItems.find(boardItem => boardItem._id === props.id));

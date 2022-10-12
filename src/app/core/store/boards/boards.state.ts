import { IBoard } from "../../../models/iboard";

export interface BoardsState {
  boards: IBoard[]
}

export const initialState: BoardsState = {
  boards: []
}

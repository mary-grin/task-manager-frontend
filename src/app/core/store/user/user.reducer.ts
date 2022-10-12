import {createReducer, on} from "@ngrx/store";
import {initialState} from "./user.state";
import {getUserSuccess} from "./user.actions";

export const userReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, user) => ({
    _id: user._id,
    username: user.username,
    imgSrc: user.imgSrc
  }))
)

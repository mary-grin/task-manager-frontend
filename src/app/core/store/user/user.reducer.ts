import {createReducer, on} from "@ngrx/store";
import {initialState} from "./user.state";
import {changeUserPhotoSuccess, getUser, getUserSuccess, logIn, logInSuccess, logOutSuccess} from "./user.actions";

export const userReducer = createReducer(
  initialState,
  on(getUser, (state) => ({...state, isLoading: true})),
  on(getUserSuccess, (state, user) => ({...user, isLoading: false})),
  on(logIn, (state) => ({...state, isLoading: true})),
  on(logInSuccess, (state, user) => ({...user, isLoading: false})),
  on(changeUserPhotoSuccess, (state, path) => ({...state, imgSrc: path.path,})),
  on(logOutSuccess, () => (initialState))
)

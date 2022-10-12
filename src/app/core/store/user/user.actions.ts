import {createAction, props} from "@ngrx/store";
import {IUser} from "../../../models/iuser";

export const getUser = createAction('[User] Login');

export const getUserSuccess = createAction('[User] Login Success',
  props<IUser>()
);

export const getUserFailed = createAction('[User] Login Failed',
  props<{error: Error}>()
);

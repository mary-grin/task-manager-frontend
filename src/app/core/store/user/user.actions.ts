import {createAction, props} from "@ngrx/store";
import {IUser, IUserAuth} from "../../../models/iuser";

export const getUser = createAction('[User] Get User');

export const getUserSuccess = createAction('[User] Get User Success',
  props<IUser>()
);

export const getUserFailed = createAction('[User] Get User Failed',
  props<{error: Error}>()
);

export const logIn = createAction('[User] Login',
  props<IUserAuth>());

export const logInSuccess = createAction('[User] Login Success',
  props<IUser>()
);

export const logInFailed = createAction('[User] Login Failed',
  props<{error: Error}>()
);

export const changeUserPhoto = createAction('[User] Change User Photo',
  props<{image: File}>()
);

export const changeUserPhotoSuccess = createAction('[User] Change User Photo Success',
  props<{path: string}>()
);

export const changeUserPhotoFailed = createAction('[User] Change User Photo Failed',
  props<{error: Error}>()
);

export const logOut = createAction('[User] Logout');

export const logOutSuccess = createAction('[User] Logout Success');

export const logOutFailed = createAction('[User] Logout Failed',
  props<{error: Error}>()
);

export interface IUser {
  _id: string,
  username: string,
  imgSrc: string,
  isLoading: boolean
}

export interface IUserAuth {
  username: string,
  password: string
}

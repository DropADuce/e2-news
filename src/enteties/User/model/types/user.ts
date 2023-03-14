export interface IUser {
    id: string,
    userName: string,
    password: string,
}

export interface IUserSchema {
    authData?: IUser,
}

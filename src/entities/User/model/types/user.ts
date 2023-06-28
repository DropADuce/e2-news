export interface IUser {
    id: string,
    username: string,
    password?: string,
    avatar?: string,
}

export interface IUserSchema {
    isReady: boolean;
    authData?: IUser,
}

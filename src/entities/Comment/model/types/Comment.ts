import { IUser } from 'entities/User';

export interface IComment {
    id: number,
    text: string,
    articleId: number,
    user: IUser,
}

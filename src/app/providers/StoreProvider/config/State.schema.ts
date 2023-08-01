import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/authByUsername';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import {
    NavigateOptions,
    To,
} from 'react-router-dom';
import { IArticleDetailsSchema } from 'entities/Article';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export interface IStateSchema {
    user: IUserSchema,
    // Async reducers
    loginForm?: ILoginSchema,
    profile?: IProfileSchema,
    articleDetails?: IArticleDetailsSchema,
    articleDetailsComments?: IArticleDetailsCommentsSchema,
}

export type TReducers = keyof IStateSchema

export interface IReducerManager {
    getReducersMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add:  (key: TReducers, reducer: Reducer) => void;
    remove: (key: TReducers) => void;
}

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IThunkExtraArgs {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
    rejectValue: T,
    extra: IThunkExtraArgs,
    state: IStateSchema,
}

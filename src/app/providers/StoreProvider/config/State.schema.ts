import { IUserSchema } from 'enteties/User';
import { ILoginSchema } from 'features/authByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface IStateSchema {
    user: IUserSchema,
    // Async reducers
    loginForm?: ILoginSchema,
}

export type TReducers = keyof IStateSchema

export interface IReducerManager {
    getReducersMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add:  (key: TReducers, reducer: Reducer) => void;
    remove: (key: TReducers) => void;
}

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager?: IReducerManager
}


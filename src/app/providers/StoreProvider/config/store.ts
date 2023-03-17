import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from '../config/reducerManager';
import { userReducer } from 'enteties/User';
import { IStateSchema, IStoreWithManager } from './State.schema';

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(reducers);

    const store: IStoreWithManager = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });


    store.reducerManager = reducerManager;

    return store;
};

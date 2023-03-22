import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from '../config/reducerManager';
import { userReducer } from 'enteties/User';
import { IStateSchema } from './State.schema';

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(reducers);

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

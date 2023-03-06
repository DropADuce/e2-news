import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { IStateSchema } from './State.schema';
import { userReducer } from 'enteties/User';

export const createReduxStore = (initialState?: IStateSchema) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { IStateSchema } from './State.schema';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/authByUsername';

export const createReduxStore = (initialState?: IStateSchema) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<IStateSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

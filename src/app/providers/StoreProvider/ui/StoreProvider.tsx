import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/State.schema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children: ReactNode,
    initialState?: IStateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {

    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<IStateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

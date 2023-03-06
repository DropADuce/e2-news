import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/State.schema';

interface IStoreProviderProps {
    children: ReactNode,
    initialState?: IStateSchema
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
}) => {

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

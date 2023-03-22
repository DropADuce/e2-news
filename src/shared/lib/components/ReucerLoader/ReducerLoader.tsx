import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { IStoreWithManager, TReducers } from 'app/providers/StoreProvider/config/State.schema';

export type   TReducersList = {
    [key in TReducers]?: Reducer
}
type TReducersListEntry = [TReducers, Reducer];
interface IReducerLoaderProps {
    reducers: TReducersList
    removeAfterUnmount?: boolean,
}

export const ReducerLoader: FC<IReducerLoaderProps> = ({
    children,
    reducers,
    removeAfterUnmount = true,
}) => {
    const dispatch = useDispatch();
    const store = useStore() as IStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: TReducersListEntry) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName} reducer` });
        });

        if (removeAfterUnmount) return () => {
            Object.entries(reducers).forEach(([reducerName]: TReducersListEntry) => {
                store.reducerManager.remove(reducerName);
                dispatch({ type: `@REMOVE ${reducerName} reducer` });
            });
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};

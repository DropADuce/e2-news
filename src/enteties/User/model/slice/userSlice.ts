import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<IUser>) => {
            state.authData = payload;
        },
        initAuthData: (state) => {
            const currentUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (currentUser) {
                state.authData = JSON.parse(currentUser);
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from 'enteties/User/model/types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { reducer: userReducer, actions: userActions } = userSlice;

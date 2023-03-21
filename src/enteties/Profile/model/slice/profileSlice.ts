import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
    data: undefined,
    isLoading: false,
    isReadonly: true,
    error: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = profileSlice;

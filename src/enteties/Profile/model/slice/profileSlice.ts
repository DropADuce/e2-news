import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = profileSlice;

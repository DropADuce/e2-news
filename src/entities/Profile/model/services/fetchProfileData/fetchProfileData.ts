import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (id, { rejectWithValue,  extra }) => {
        const { api } = extra;

        try {
            const response = await api.get<IProfile>(`/profile/${id}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

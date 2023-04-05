import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../types/profile';
import { profileFormSelector } from '../selectors/profileSelectors';
import { IThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const form = profileFormSelector(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', form);

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

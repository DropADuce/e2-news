import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IProfile, ValidateProfileData,
} from '../../types/profile';
import { profileFormSelector } from '../../selectors/profileSelectors';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    string,
    IThunkConfig<Array<ValidateProfileData>>
>(
    'profile/updateProfileData',
    async (profileId, { extra, rejectWithValue, getState }) => {
        const form = profileFormSelector(getState());

        const errors = validateProfileData(form);

        if (errors.length) return rejectWithValue(errors);

        try {
            const response = await extra.api.put<IProfile>(`/profile/${profileId}`, form);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileData.SERVER_ERROR]);
        }
    },
);

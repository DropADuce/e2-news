import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'enteties/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

interface ILoginByUsernameArgs {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameArgs, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI)=> {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData);

            if (!response.data) throw new Error();

            localStorage.setItem(USER_LOCALSTORAGE_KEY,JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

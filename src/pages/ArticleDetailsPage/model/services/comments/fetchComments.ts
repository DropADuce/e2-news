import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchComments = createAsyncThunk<Array<IComment>, string | undefined, IThunkConfig<string>>(
    'articleDetails/fetchComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if (!articleId) return rejectWithValue('error');

        try {
            const response = await extra.api.get<Array<IComment>>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            const result = response.data;

            if (result) return result;

            throw new Error();
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

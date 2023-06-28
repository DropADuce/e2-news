import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/Article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (id, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            const response = await api.get<IArticle>(`/articles/${id}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e: any) {
            return rejectWithValue(e);
        }
    },
);

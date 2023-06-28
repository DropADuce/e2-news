import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IArticleDetailsSchema } from '../types/articleDetails.schema';
import { fetchArticleById } from '../service/fetchArticleById/fetchArticleById';
import { IArticle } from '../types/Article';

const initialState: IArticleDetailsSchema = {
    isLoading: false,
    article: undefined,
    error: '',
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
                state.isLoading = false;
                state.article = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articleDetailsActions,
    reducer: articleDetailsReducer,
} = articleDetailsSlice;

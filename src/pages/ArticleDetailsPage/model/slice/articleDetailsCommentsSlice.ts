import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

import { IComment } from 'entities/Comment';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { fetchComments } from 'pages/ArticleDetailsPage/model/services/comments/fetchComments';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: ({ id }) => id,
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });

        builder.addCase(fetchComments.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, payload);
        });

        builder.addCase(fetchComments.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
    },
});

export const {
    actions: commentsActions,
    reducer: commentsReducer,
} = articleDetailsCommentsSlice;

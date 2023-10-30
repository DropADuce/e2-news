import { createAsyncThunk } from '@reduxjs/toolkit';

import { IComment } from 'entities/Comment';
import { IThunkConfig } from 'app/providers/StoreProvider/config/State.schema';
import { articleDetailsSelector } from 'entities/Article/model/selectors/selectors';
import { userAuthDataSelector } from 'entities/User';
import { setText } from 'features/addComment';
import { fetchComments } from 'pages/ArticleDetailsPage/model/services/comments/fetchComments';

export const sendCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
    'articleDetail/sendCommentForArticle',
    async (text, {
        dispatch,
        getState,
        rejectWithValue,
        extra,
    }) => {
        const state = getState();

        const article = articleDetailsSelector(state);
        const authUser = userAuthDataSelector(state);

        if (!authUser || !article || !text) return rejectWithValue('no data');

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article?.id,
                userId: authUser?.id,
                text,
            });

            const result = response?.data;

            if (!result) throw new Error('error');

            dispatch(setText(''));
            dispatch(fetchComments(article.id));

            return response.data;
        } catch(error: any) {
            return rejectWithValue('error');
        }
    },
);

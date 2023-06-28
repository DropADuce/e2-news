import React, {
    FC,
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import {
    ReducerLoader,
    TReducersList,
} from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    commentsReducer, getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import {
    isCommentsErrorSelector,
    isCommentsLoadingSelector,
} from 'pages/ArticleDetailsPage/model/selectors/comments/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchComments } from 'pages/ArticleDetailsPage/model/services/comments/fetchComments';

const reducers: TReducersList = {
    articleDetails: articleDetailsReducer,
    articleDetailsComments: commentsReducer,
};

interface IArticleDetailsPageProps {
    mix?: string,
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({
    mix,
}) => {
    const comments = useSelector(getArticleComments.selectAll);
    const isCommentsLoading = useSelector(isCommentsLoadingSelector);
    const isCommentsError = useSelector(isCommentsErrorSelector);

    const dispatch = useAppDispatch();

    const { id } = useParams<{id: string}>();

    const { t } = useTranslation('articles');

    useInitialEffect(() => dispatch(fetchComments(id)));

    if (!id) {
        return (
            <Text
                title={t('Статья не найдена')}
                align='center'
            />
        );
    }

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.articleDetailsPage, {}, [mix])}>
                <ArticleDetails id={id} />

                <Text
                    mix={classes.commentsTitle}
                    title={t('Комментарии')}
                />

                <CommentList
                    comments={comments}
                    isLoading={isCommentsLoading}
                />
            </div>
        </ReducerLoader>
    );
};

export default memo(ArticleDetailsPage);

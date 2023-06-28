import React, {
    FC, memo, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/service/fetchArticleById/fetchArticleById';
import {
    articleDetailsErrorSelector,
    articleDetailsSelector,
    isArticleDetailsErrorSelector, isArticleDetailsLoadingSelector,
} from 'entities/Article/model/selectors/selectors';
import {
    ReducerLoader, TReducersList,
} from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';
import { ArticleDetailsAvatar } from 'entities/Article/ui/ArticleDetails/ArticleDetailsAvatar/ArticleDetailsAvatar';
import { ArticleDetailsTitle } from 'entities/Article/ui/ArticleDetails/ArticleDetailsTitle/ArticleDetailsTitle';
import { ArticleDetailsArticleBlock } from './ArticleDetailsArticleBlock/ArticleDetailsArticleBlock';

const reducers: TReducersList = {
    articleDetails: articleDetailsReducer,
};

interface IArticleDetailsProps {
    id: string,
    mix?: string,
}

export const ArticleDetails: FC<IArticleDetailsProps> = memo(({
    id,
    mix,
}) => {
    const articleData = useSelector(articleDetailsSelector);
    const isLoading = useSelector(isArticleDetailsLoadingSelector);
    const isError = useSelector(isArticleDetailsErrorSelector);
    const errorMessage = useSelector(articleDetailsErrorSelector);

    const dispatch = useAppDispatch();

    const { t } = useTranslation('articles');

    useEffect(() => {
        if (__PROJECT__ === 'frontend') dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const renderContent = () => {
        if (isError) {
            return (
                <Text
                    title={t('Произошла ошибка')}
                    text={errorMessage}
                    theme='error'
                    align='center'
                />
            );
        }

        return (
            <>
                <ArticleDetailsAvatar
                    isLoading={isLoading}
                    image={articleData?.img}
                    mix={classes.avatar}
                />

                <div className={classes.title}>
                    <ArticleDetailsTitle
                        title={articleData?.title}
                        subtitle={articleData?.subtitle}
                        isLoading={isLoading}
                    />
                </div>

                <ArticleDetailsArticleBlock
                    isLoading={isLoading}
                    views={articleData?.views}
                    createdAt={articleData?.createdAt}
                    blocks={articleData?.blocks}
                />
            </>
        );
    };

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.articleDetails, {}, [mix])}>
                {renderContent()}
            </div>
        </ReducerLoader>
    );
});

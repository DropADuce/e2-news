import React, {
    FC, memo, useCallback,
} from 'react';

import { Icon } from 'shared/ui/Icon/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { EnumIcons } from 'shared/constants/Icons';
import {
    ArticleBlockTypes, TArticleBlock, TArticleBlocks,
} from '../../../model/types/Article';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import classes from './articleDetailsArticleBlock.module.scss';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';

interface IArticleDetailsArticleBlockProps {
    isLoading: boolean,
    createdAt?: string,
    views?: number,
    blocks?: TArticleBlocks,
}

export const ArticleDetailsArticleBlock: FC<IArticleDetailsArticleBlockProps> = memo(({
    isLoading,
    views = 0,
    createdAt = '',
    blocks = [],
}) => {
    const renderBlock = useCallback((block: TArticleBlock) => {
        const { type, id } = block;

        if (type === ArticleBlockTypes.TEXT) return (
            <ArticleTextBlockComponent
                key={id}
                block={block}
            />
        );

        if (type === ArticleBlockTypes.CODE) return (
            <ArticleCodeBlockComponent
                key={`code-${id}`}
                block={block}
            />
        );

        if (type === ArticleBlockTypes.IMAGE) return (
            <ArticleImageBlockComponent
                key={`image-${id}`}
                block={block}
            />
        );
    }, []);

    if (isLoading) {
        return (
            <>
                <Skeleton height={300}/>
                <Skeleton height={300}/>
            </>
        );
    }

    return (
        <div className={classes.articleBlock}>
            <div className={classes.articleMeta}>
                <Icon icon={EnumIcons.CALENDAR}>
                    <Text text={createdAt}/>
                </Icon>

                <Icon icon={EnumIcons.EYE}>
                    <Text text={String(views)}/>
                </Icon>
            </div>

            {blocks.map(renderBlock)}
        </div>
    );
});

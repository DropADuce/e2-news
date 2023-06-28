import React, {
    FC, memo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { IArticleImageBlock } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
    block: IArticleImageBlock,
    mix?: string,
}

export const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = memo(({
    block,
    mix,
}) => {
    const {
        src,
        title,
    } = block;

    return (
        <div className={classNames(classes.articleImageBlockComponent, {}, [mix])}>
            <img
                src={src}
                alt={title}
                className={classes.image}
            />

            {title && (
                <Text
                    text={title}
                    align='center'
                />
            )}
        </div>
    );
});

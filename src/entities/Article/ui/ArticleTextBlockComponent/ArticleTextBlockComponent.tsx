import React, {
    FC, memo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import classes from './ArticleTextBlockComponent.module.scss';
import { IArticleTextBlock } from '../../model/types/Article';

interface IArticleTextBlockComponentProps {
    block: IArticleTextBlock
    mix?: string,
}

export const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = memo(({
    block,
    mix,
}) => {
    const { t } = useTranslation();

    const {
        title,
        paragraphs,
    } = block;

    return (
        <div className={classNames(classes.articleTextBlockComponent, {}, [mix])}>
            {title && (
                <Text
                    title={title}
                    mix={classes.title}
                />
            )}

            {paragraphs.map((paragraph) => (
                <Text
                    text={paragraph}
                    mix={classes.paragraph}
                    key={paragraph}
                />
            ))}
        </div>
    );
});

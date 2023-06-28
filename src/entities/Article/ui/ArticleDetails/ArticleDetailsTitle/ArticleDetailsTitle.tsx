import React, {
    FC, memo,
} from 'react';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import classes from './articleDetailsTitle.module.scss';

interface IArticleDetailsTitleProps {
    title?: string,
    subtitle?: string,
    isLoading: boolean,
}

export const ArticleDetailsTitle: FC<IArticleDetailsTitleProps> = memo(({
    title = '',
    subtitle = '',
    isLoading,
}) => {

    if (isLoading) {
        return (
            <>
                <Skeleton
                    height={32}
                    width={300}
                />

                <Skeleton
                    height={24}
                    width='100%'
                />
            </>
        );
    }

    return (
        <Text
            title={title}
            text={subtitle}
            size='l'
            mix={classes.title}
        />
    );
});

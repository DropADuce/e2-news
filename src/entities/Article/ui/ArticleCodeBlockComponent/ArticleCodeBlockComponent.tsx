import React, {
    FC, memo,
} from 'react';

import { Code } from 'shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
    block: IArticleCodeBlock,
    mix?: string,
}

export const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = memo(({
    block,
    mix,
}) => {
    const { code } = block;

    return (
        <div className={classNames(classes.ArticleCodeBlockComponent, {}, [mix])}>
            <Code text={code} />
        </div>
    );
});

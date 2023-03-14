import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

interface ITextProps {
    title?: string,
    text?: string,
    theme?: 'common' | 'error'
    mix?: string,
}

export const Text: FC<ITextProps> = ({
    title,
    text,
    theme = 'common',
    mix,
}) => {
    return (
        <div className={classNames(classes.text, {}, [mix, classes[theme]])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
};

import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

type TAlign = 'center' | 'right' | 'left'

type TSizes = 'm' | 'l';

interface ITextProps {
    title?: string,
    text?: string,
    theme?: 'common' | 'error'
    align?: TAlign,
    size?: TSizes
    mix?: string,
}

export const Text = memo(({
    title,
    text,
    theme = 'common',
    align = 'left',
    size = 'm',
    mix,
}: ITextProps) => {

    const mixes = [
        mix,
        classes[theme],
        classes[align],
        classes[size],
    ];

    return (
        <div className={classNames(classes.text, {}, mixes)}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});

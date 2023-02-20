import React, { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    INHERIT = 'inherit',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    mix?: string,
    theme?: ThemeButton,
    size?: 'm' | 'l' | 'xl',
    square?: boolean,
}

export const Button: FC<IButtonProps> = ({
    mix,
    children,
    theme = ThemeButton.CLEAR,
    size = 'm',
    square = false,
    ...props
}) => {

    const mods = {
        [classes.square]: square,
        [classes[`size_${size}`]]: size,
    };

    return (
        <button
            className={classNames(classes.button, mods, [mix, classes[theme]])}
            {...props}
        >
            {children}
        </button>
    );
};

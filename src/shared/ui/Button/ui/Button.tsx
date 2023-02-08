import React, {ButtonHTMLAttributes, FC} from "react";

import {classNames} from "shared/lib/helpers/classNames";
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    mix?: string,
    theme?: ThemeButton,
}

export const Button: FC<IButtonProps> = ({
                                             mix,
                                             children,
                                             theme = ThemeButton.CLEAR,
                                             ...props
                                         }) => {
    return (
        <button
            className={classNames(classes.button, {}, [mix, classes[theme]])}
            {...props}
        >
            {children}
        </button>
    )
}

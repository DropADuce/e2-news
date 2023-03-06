import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type THTMLInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className'>
interface IInputProps extends THTMLInputElement{
    value?: string
    onChange?: (value: string) => void,
    autofocus?: boolean,
    mix?: string,
}

export const Input = memo(({
    value,
    onChange,
    mix,
    type = 'text',
    autofocus = false,
    ...props
}: IInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef, autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classes.inputWrapper}>
            <input
                ref={inputRef}
                type={type}
                onChange={onChangeHandler}
                className={classNames(classes.input, {}, [mix])}
                autoFocus={autofocus}
                value={value}
                {...props}
            />
        </div>
    );
});

import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import classes from './Modal.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

interface IModalProps {
    mix?: string,
    isOpen: boolean,
    onClose?: () => void
    children?: ReactNode,
}

export const Modal: FC<IModalProps> = ({
    mix,
    isOpen = false,
    onClose,
    children,
}) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') onCloseHandler();
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const contentClickHandler = (event: React.MouseEvent) => event.stopPropagation();

    const mods = {
        [classes.opend]: isOpen,
        [classes.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(classes.modal, mods, [mix])}>
                <div
                    className={classes.overlay}
                    onClick={onCloseHandler}
                >
                    <div
                        className={classes.content}
                        onClick={contentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

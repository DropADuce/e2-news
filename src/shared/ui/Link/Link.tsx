import React, { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import classes from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ILinkProps extends LinkProps {
    mix?: string,
    theme?: LinkTheme,
}

export const Link: FC<ILinkProps> = ({
    mix,
    children,
    to,
    theme = LinkTheme.PRIMARY,
    ...props
}) => {
    return (
        <ReactRouterLink
            to={to}
            className={classNames(classes.link, {}, [mix, classes[theme]])}
            {...props}
        >
            {children}
        </ReactRouterLink>
    );
};

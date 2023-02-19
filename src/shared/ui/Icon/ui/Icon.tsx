import React, { Children, FC, useMemo } from 'react';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './Icon.module.scss';
import { Icons } from 'shared/assets/icons';

interface IIconProps {
    icon: keyof typeof Icons
    mix?: string,
}

export const Icon: FC<IIconProps> = ({
    mix,
    icon,
    children,
}) => {
    const iconComponent = useMemo(() => {
        const CurrentIcon = Icons[icon];
        if (CurrentIcon) return <CurrentIcon />;
        return <span />;
    }, [icon]);

    const renderContent = () => {
        if (Children.count(children)) return (
            <div className={classNames(classes.icon, {}, [mix])}>
                {iconComponent}
                {children}
            </div>
        );
        return iconComponent;
    };

    return renderContent();
};

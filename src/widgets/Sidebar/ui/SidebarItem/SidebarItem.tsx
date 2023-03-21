import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/ui/Icon';
import { Link } from 'shared/ui/Link';
import classes from './SidebarItem.module.scss';
import { ISidebarItem } from '../../model/items';

interface ISidebarItemProps extends ISidebarItem {
    collapsed: boolean,
}

export const SidebarItem = memo(({
    path,
    text,
    icon,
    collapsed,
}: ISidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <Link to={path}>
            <Icon
                icon={icon}
                mix={classNames(classes.linkWithIcon, { [classes.collapsed]: collapsed })}
            >
                <span className={classes.link}>{t(text)}</span>
            </Icon>
        </Link>
    );
});

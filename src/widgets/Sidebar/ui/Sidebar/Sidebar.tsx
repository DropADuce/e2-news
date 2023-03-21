import React, { memo, useMemo, useState } from 'react';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItems } from '../../model/items';
import classes from './Sidebar.module.scss';

interface ISidebarProps {
    mix?: string,
}

export const Sidebar = memo(({
    mix,
}: ISidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleIsCollapsed = () => setIsCollapsed((prev) => !prev);
    const buttonContent = useMemo(() => (
        isCollapsed ? '>' : '<'
    ), [isCollapsed]);

    return (
        <div
            className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [mix])}
            data-testid='sidebar'
        >
            <div className={classes.items}>
                {SidebarItems.map((sidebarItem) => (
                    <SidebarItem
                        {...sidebarItem}
                        collapsed={isCollapsed}
                        key={sidebarItem.path}
                    />
                ))}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={isCollapsed}/>
            </div>
            <Button
                onClick={toggleIsCollapsed}
                data-testid='sidebar-toggle'
                mix={classes.sidebarCollapseButton}
                theme={ThemeButton.INHERIT}
                size='m'
            >
                {buttonContent}
            </Button>
        </div>
    );
});

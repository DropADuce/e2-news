import React, { FC, useState } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface ISidebarProps {
    mix?: string,
}

export const Sidebar: FC<ISidebarProps> = ({
    mix,
}) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleIsCollapsed = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [mix])}
        >
            <button onClick={toggleIsCollapsed}>
                toggle
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

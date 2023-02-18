import React, { FC, useState } from 'react';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import classes from './Sidebar.module.scss';

interface ISidebarProps {
    mix?: string,
}

export const Sidebar: FC<ISidebarProps> = ({
    mix,
}) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleIsCollapsed = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [mix])}
            data-testid='sidebar'
        >
            <Button
                onClick={toggleIsCollapsed}
                data-testid='sidebar-toggle'
            >
                {/*toggle*/}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

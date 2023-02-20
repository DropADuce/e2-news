import React, { FC, useMemo, useState } from 'react';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import classes from './Sidebar.module.scss';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Link } from 'shared/ui/Link';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Icon } from 'shared/ui/Icon/ui/Icon';

interface ISidebarProps {
    mix?: string,
}

export const Sidebar: FC<ISidebarProps> = ({
    mix,
}) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const { t } = useTranslation();

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
                <Link to={RoutePath.main}>
                    <Icon
                        icon='MainPage'
                        mix={classes.linkWithIcon}
                    >
                        <span className={classes.link}>{t('Главная')}</span>
                    </Icon>
                </Link>
                <Link to={RoutePath.about}>
                    <Icon
                        icon='AboutPage'
                        mix={classes.linkWithIcon}
                    >
                        <span className={classes.link}>{t('Обо мне')}</span>
                    </Icon>
                </Link>
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
};

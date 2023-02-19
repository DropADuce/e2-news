import React, { FC } from 'react';

import { Link } from 'shared/ui/Link';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
    mix?: string,
}

export const Navbar: FC<INavbarProps> = ({
    mix,
}) => {

    const { t } = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.links}>
                <Link to='/'>{t('Главная')}</Link>
            </div>
        </div>
    );
};


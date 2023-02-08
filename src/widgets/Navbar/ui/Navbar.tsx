import React, {FC} from "react";

import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Link} from "shared/ui/Link/Link";
import {classNames} from "shared/lib/helpers/classNames";
import classes from './Navbar.module.scss';

interface INavbarProps {
    mix?: string,
}

export const Navbar: FC<INavbarProps> = ({
                                             mix
                                         }) => {
    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.links}>
                <Link to='/'>Главная</Link>
                <Link to='/about'>Обо мне</Link>
            </div>
        </div>
    )
}


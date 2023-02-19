import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    mix?: string,
    short?: boolean
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({
    mix,
    short = false,
}) => {
    const { t, i18n } = useTranslation();

    const toggleTranslate = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const langswitcherTitle = useMemo(() => (
        short ? 'Короткий язык' : 'Язык'
    ), [short]);

    return (
        <Button
            onClick={toggleTranslate}
            mix={classNames(classes.langSwitcher, {}, [mix])}
        >
            {t(langswitcherTitle)}
        </Button>
    );
};

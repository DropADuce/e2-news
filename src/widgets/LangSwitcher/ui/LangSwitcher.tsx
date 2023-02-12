import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    mix?: string,
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({
    mix,
}) => {
    const { t, i18n } = useTranslation();

    const toggleTranslate = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggleTranslate}
            mix={classNames(classes.langSwitcher, {}, [mix])}
        >
            {t('Язык')}
        </Button>
    );
};

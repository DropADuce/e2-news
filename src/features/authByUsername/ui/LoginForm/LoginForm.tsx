import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';

interface ILoginFormProps {
    mix?: string,
}

export const LoginForm: FC<ILoginFormProps> = ({
    mix,
}) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.loginForm, {}, [mix])}>
            <Input
                autofocus
                type='text'
                placeholder={t('Введите имя ползователя')}
            />
            <Input
                type='password'
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ThemeButton.PRIMARY}
                mix={classes.loginButton}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

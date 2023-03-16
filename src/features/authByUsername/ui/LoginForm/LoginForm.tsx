import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import {
    errorSelector,
    isLoadingSelector,
    passwordSelector,
    usernameSelector,
} from '../../model/selectors/authSelectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Text } from 'shared/ui/Text/Text';

interface ILoginFormProps {
    mix?: string,
}

export const LoginForm = memo(({
    mix,
}: ILoginFormProps) => {
    const username = useSelector(usernameSelector);
    const password = useSelector(passwordSelector);
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(classes.loginForm, {}, [mix])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text
                text={t('Ошибка! Не верный логин, или пароль')}
                theme='error'
            />}
            <Input
                autofocus
                type='text'
                placeholder={t('Введите имя ползователя')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='password'
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.PRIMARY}
                mix={classes.loginButton}
                onClick={onLogin}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

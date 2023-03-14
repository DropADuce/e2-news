import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userAuthDataSelector } from 'enteties/User';

interface INavbarProps {
    mix?: string,
}

export const Navbar: FC<INavbarProps> = ({
    mix,
}) => {
    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(userAuthDataSelector);

    useEffect(() => {
        if (authData) setIsOpenModal(false);
    }, [authData]);

    const onModalOpen = useCallback(() => setIsOpenModal(true), []);
    const onCloseModal = useCallback(() => setIsOpenModal(false), []);

    const buttonTitle = useMemo(() => (
        authData ? t('Выйти') : t('Войти')
    ), [authData, t]);

    const onLoginButtonClick = useMemo(() => {
        if (authData) return () => dispatch(userActions.logout());
        return onModalOpen;
    }, [authData, dispatch, onModalOpen]);

    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.links}>
                <Button
                    size='m'
                    onClick={onLoginButtonClick}
                >
                    {buttonTitle}
                </Button>
            </div>
            <LoginModal
                isOpen={isModalOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};


import React, { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/authByUsername';

interface INavbarProps {
    mix?: string,
}

export const Navbar: FC<INavbarProps> = ({
    mix,
}) => {
    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const onModalOpen = useCallback(() => setIsOpenModal(true), []);
    const onCloseModal = useCallback(() => setIsOpenModal(false), []);

    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.links}>
                <Button
                    size='m'
                    onClick={onModalOpen}
                >
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal
                isOpen={isModalOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};


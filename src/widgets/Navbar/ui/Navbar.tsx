import React, { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface INavbarProps {
    mix?: string,
}

export const Navbar: FC<INavbarProps> = ({
    mix,
}) => {
    const [isModalopen, setIsOpenModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const toggleModalVisible = useCallback(() => setIsOpenModal((prev) => !prev), []);

    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.links}>
                <Button
                    size='m'
                    onClick={toggleModalVisible}
                >
                    {t('Войти')}
                </Button>
            </div>
            <Modal
                isOpen={isModalopen}
                onClose={toggleModalVisible}
            >
            </Modal>
        </div>
    );
};


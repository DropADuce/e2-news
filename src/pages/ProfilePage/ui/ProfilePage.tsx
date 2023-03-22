import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePage.module.scss';
import { ReducerLoader, TReducersList } from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { profileReducer } from 'enteties/Profile';

interface IProfilePageProps {
    mix?: string,
}

const reducers: TReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<IProfilePageProps> = ({
    mix,
}) => {
    const { t } = useTranslation();
    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.profilePage, {}, [mix])}>
                {t('Это страница профайла')}
            </div>
        </ReducerLoader>
    );
};

export default ProfilePage;

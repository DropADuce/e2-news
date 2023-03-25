import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerLoader, TReducersList } from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'enteties/Profile';
import classes from './ProfilePage.module.scss';

interface IProfilePageProps {
    mix?: string,
}

const reducers: TReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<IProfilePageProps> = ({
    mix,
}) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    useEffect(() =>  {
        dispatch(fetchProfileData());
    }, []);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.profilePage, {}, [mix])}>
                {t('Это страница профайла')}
                <ProfileCard />
            </div>
        </ReducerLoader>
    );
};

export default ProfilePage;

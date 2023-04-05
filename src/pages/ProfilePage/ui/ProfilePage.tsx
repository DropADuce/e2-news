import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerLoader, TReducersList } from 'shared/lib/components/ReucerLoader/ReducerLoader';
import {
    fetchProfileData,
    profileFormSelector,
    isProfileLoadingSelector,
    isReadonlyProfileSelector,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileReducer,
} from 'entities/Profile';
import classes from './ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

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

    const profileFormData = useSelector(profileFormSelector);
    const isProfileLoading = useSelector(isProfileLoadingSelector);
    const isProfileReadonly = useSelector(isReadonlyProfileSelector);
    const profileError = useSelector(profileErrorSelector);

    const updateProfile = profileActions.updateProfile;

    const updateField = useCallback((value: string, fieldName = '') => {
        dispatch(updateProfile({ [fieldName]: value }));
    }, [updateProfile, dispatch]);

    useEffect(() =>  {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.profilePage, {}, [mix])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={profileFormData}
                    isLoading={isProfileLoading}
                    error={profileError}
                    isReadonly={isProfileReadonly}
                    updateField={updateField}
                />
            </div>
        </ReducerLoader>
    );
};

export default ProfilePage;

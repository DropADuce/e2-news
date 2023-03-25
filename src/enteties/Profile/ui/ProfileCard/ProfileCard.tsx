import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { isProfileLoadingSelector, profileDataSelector, profileErrorSelector } from 'enteties/Profile';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
    mix?: string,
}

export const ProfileCard: FC<IProfileCardProps> = ({
    mix,
}) => {
    const { t } = useTranslation();

    const profileData = useSelector(profileDataSelector);
    const isLoading = useSelector(isProfileLoadingSelector);
    const isReadonly = useSelector(isProfileLoadingSelector);
    const error = useSelector(profileErrorSelector);

    return (
        <div className={classNames(classes.profileCard, {}, [mix])}>
            <div className={classes.header}>
                <Text title={t('Профиль')}/>
                <Button theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={profileData?.name}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    value={profileData?.surname}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    );
};

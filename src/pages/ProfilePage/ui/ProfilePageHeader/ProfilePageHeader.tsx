import React, {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import {
    isReadonlyProfileSelector, profileActions, profileDataSelector, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userAuthDataSelector } from 'entities/User';

interface IProfilePageHeaderProps {
    mix?: string,
}

export const ProfilePageHeader = memo<IProfilePageHeaderProps>(({
    mix = '',
}) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const isReadonly = useSelector(isReadonlyProfileSelector);
    const authUser = useSelector(userAuthDataSelector);
    const currentProfile = useSelector(profileDataSelector);

    const { id = '' } = currentProfile ?? {};

    const {
        toggleReadonly,
        cancelEdit,
    } = profileActions;

    const onEdit = useCallback(() => dispatch(toggleReadonly()), [toggleReadonly, dispatch]);
    const onSave = useCallback(() => (dispatch(updateProfileData(id))), [updateProfileData, id, dispatch]);
    const onCancelEdit = useCallback(() => dispatch(cancelEdit()), [cancelEdit, dispatch]);

    const canEdit = String(authUser?.id) === String(currentProfile?.id);

    const renderControls = () => {
        if (isReadonly) return (
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </Button>
        );

        return (
            <div className={classes.controls}>
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onCancelEdit}
                >
                    {t('Отмена')}
                </Button>

                <Button
                    theme={ThemeButton.PRIMARY}
                    onClick={onSave}
                >
                    {t('Сохранить')}
                </Button>
            </div>
        );
    };

    return (
        <div className={classNames(classes.profilePageHeader, {}, [mix])}>
            <Text title={t('Профиль')}/>

            {canEdit && renderControls()}
        </div>
    );
});

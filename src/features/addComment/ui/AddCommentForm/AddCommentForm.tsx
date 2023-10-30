import React, {
    FC, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    commentErrorSelector, commentTextSelector,
} from 'features/addComment/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentReducer, setText,
} from 'features/addComment';
import { ReducerLoader } from 'shared/lib/components/ReucerLoader/ReducerLoader';

interface IAddCommentFormProps {
    onSendComment: (text: string) => void,
    mix?: string,
}
const AddCommentForm: FC<IAddCommentFormProps> = ({
    onSendComment,
    mix = '',
}) => {
    const commentText = useSelector(commentTextSelector);
    const commentError = useSelector(commentErrorSelector);

    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const onCommentSendHandler = useCallback(() => {
        dispatch(setText(''));
        onSendComment(commentText);
    }, [onSendComment, commentText]);

    return (
        <ReducerLoader reducers={{ addCommentForm: addCommentReducer }}>
            <div className={classNames(classes.addCommentForm, {}, [mix])}>
                <Input
                    value={commentText}
                    placeholder={t('Введите текст комментария...')}
                    onChange={(text: string) => dispatch(setText(text))}
                    isFullWidth
                    pattern='underline'
                />

                <Button onClick={onCommentSendHandler}>{t('Отправить комментарий')}</Button>
            </div>
        </ReducerLoader>
    );
};

export default AddCommentForm;

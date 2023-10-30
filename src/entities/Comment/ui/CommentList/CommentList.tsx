import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentList.module.scss';
import { IComment } from '../../model/types/Comment';

interface ICommentListProps {
    comments: Array<IComment>
    isLoading?: boolean,
    mix?: string,
}

export const CommentList: FC<ICommentListProps> = ({
    comments,
    isLoading = false,
    mix,
}) => {
    const { t } = useTranslation();

    const renderComments = () => {
        if (comments.length) return comments
            .map((comment) => (
                <CommentCard
                    comment={comment}
                    key={comment.id}
                    isLoading={isLoading}
                />));

        return <Text text={t('Комментарии отсутствуют')} />;
    };

    return (
        <div className={classNames(classes.commentList, {}, [mix])}>
            {renderComments()}
        </div>
    );
};

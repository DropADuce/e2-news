import React, { FC } from 'react';

import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentCard.module.scss';
import { IComment } from '../../model/types/Comment';

interface ICommentCardProps {
    comment: IComment,
    isLoading?: boolean
    mix?: string,
}

export const CommentCard: FC<ICommentCardProps> = ({
    comment,
    isLoading = false,
    mix,
}) => {
    const {
        user,
        text,
    } = comment;

    const {
        avatar,
        username,
    } = user;

    if (isLoading) return <CommentCardSkeleton />;

    return (
        <div className={classNames(classes.commentCard, {}, [mix])}>
            <div className={classes.header}>
                <div className={classes.username}>
                    {avatar && (
                        <Avatar
                            src={avatar}
                            size={30}
                        />
                    )}

                    <Text title={username} />
                </div>
            </div>

            <Text text={text} />
        </div>
    );
};

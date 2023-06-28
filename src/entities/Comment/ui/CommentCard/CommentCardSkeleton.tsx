import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './CommentCard.module.scss';

interface ICommentCardSkeletonProps {
    mix?: string,
}

export const CommentCardSkeleton: FC<ICommentCardSkeletonProps> = ({
    mix,
}) => (
    <div className={classNames(classes.commentCard, {}, [mix])}>
        <div className={classes.header}>
            <div className={classes.username}>
                <Skeleton
                    height={30}
                    width={30}
                    borderRadius='50%'
                />

                <Skeleton height={30}
                    width={300} />
            </div>
        </div>

        <Skeleton
            height={100}
            width='100%'
        />
    </div>
);

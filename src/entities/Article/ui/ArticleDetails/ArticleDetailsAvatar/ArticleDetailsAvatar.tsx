import React, { FC } from 'react';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface IArticleDetailsAvatarProps {
    isLoading: boolean,
    image: string | undefined,
    mix: string,
}

export const ArticleDetailsAvatar: FC<IArticleDetailsAvatarProps> = ({
    isLoading,
    image,
    mix,
}) => {
    if (isLoading) return (
        <Skeleton
            width={200}
            height={200}
            borderRadius='50%'
            mix={mix}
        />
    );

    return (
        <Avatar
            src={image || ''}
            size={200}
            mix={mix}
        />
    );
};

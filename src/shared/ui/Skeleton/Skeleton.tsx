import React, {
    FC, memo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Skeleton.module.scss';

interface ISkeletonProps {
    mix?: string,
    height?: string | number,
    width?: string | number,
    borderRadius?: string | number,
}

export const Skeleton: FC<ISkeletonProps> = memo(({
    mix,
    ...styles
}) => {
    return (
        <div
            className={classNames(classes.skeleton, {}, [mix])}
            style={styles}
        >
        </div>
    );
});

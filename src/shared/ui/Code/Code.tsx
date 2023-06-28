import React, {
    FC, useCallback,
} from 'react';

import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/ui/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { EnumIcons } from 'shared/constants/Icons';
import { clipboardCopy } from 'shared/lib/utils/clipboardCopy/clipboardCopy';
import classes from './Code.module.scss';

interface ICodeProps {
    text: string,
    mix?: string,
}

export const Code: FC<ICodeProps> = ({
    mix,
    text,
}) => {

    const onCopy = useCallback(() => clipboardCopy(text), [text]);

    return (
        <pre className={classNames(classes.code, {}, [mix])}>
            <code>
                {text}
            </code>

            <Button
                onClick={onCopy}
                mix={classes.copy}
            >
                <div
                    className={classes.copyIcon}
                    onClick={onCopy}
                >
                    <Icon icon={EnumIcons.COPY}/>
                </div>
            </Button>
        </pre>
    );
};

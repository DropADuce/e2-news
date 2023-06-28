import React, {
    FC, memo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    mix?: string,
}

const ArticlesPage: FC<IArticlesPageProps> = ({
    mix,
}) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(classes.articlesPage, {}, [mix])}>
            <p>{t('ArticlesPage')}</p>
        </div>
    );
};

export default memo(ArticlesPage);

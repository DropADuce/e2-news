import React from 'react';
import {
    ComponentMeta, ComponentStory,
} from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleTypes } from 'entities/Article/model/types/Article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        article: {
            id: '1',
            createdAt: '20 мая 2023',
            blocks: [
                {
                    title: '123',
                    id: '1',
                },
            ],
            title: 'Тестовая статья',
            subtitle: 'Тестовая статья',
            type: [ArticleTypes.IT],
            views: 1,
        },
    },
    articleDetailsComments: {
        isLoading: false,
        ids: [],
        entities: {},
        error: '',
    },
}), RouterDecorator];

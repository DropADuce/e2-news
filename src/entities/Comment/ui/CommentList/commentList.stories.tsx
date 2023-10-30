import React from 'react';
import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { IStateSchema } from 'app/providers/StoreProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { commentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {
    CommentList, IComment,
} from 'entities/Comment';

const commentsState: DeepPartial<IStateSchema> = {
    articleDetailsComments: {
        ids: [1],
        entities: {
            1: {
                id: 1,
                text: 'test-comment',
                articleId: 1,
                user: {
                    id: '1',
                    username: 'Batman',
                    password: 'Batman',
                    avatar: 'https://static.vecteezy.com/system/resources/previews/021/671/874/large_2x/batman-logo-transparent-free-png.png',
                },
            },
        },
    },
};

const reducersMap = {
    articleDetailsComments: commentsReducer,
};

export default {
    title: 'entities/comments/CommentsList',
    component: CommentList,
    argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: Object.values(commentsState.articleDetailsComments?.entities ?? {}) as Array<IComment>,
};
Primary.decorators = [StoreDecorator(commentsState, reducersMap), RouterDecorator];

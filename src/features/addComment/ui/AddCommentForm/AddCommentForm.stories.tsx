import React from 'react';
import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { IStateSchema } from 'app/providers/StoreProvider';
import { addCommentReducer } from 'features/addComment';
import AddCommentForm from './AddCommentForm';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { action } from '@storybook/addon-actions';

const commentsState: DeepPartial<IStateSchema> = {
    addCommentForm: {
        text: '',
        error: '',
    },
};

const reducersMap = {
    addCommentForm: addCommentReducer,
};

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment'),
};
Primary.decorators = [StoreDecorator(commentsState, reducersMap), RouterDecorator];

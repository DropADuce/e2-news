import React from 'react';
import {
    ComponentMeta, ComponentStory,
} from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: {
            username: 'admin',
        },
    },
}), RouterDecorator];

export const Light_NoAuth = Template.bind({});
Light_NoAuth.args = {};
Light_NoAuth.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    },
}), RouterDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({
    user: {
        authData: {
            username: 'admin',
        },
    },
}), RouterDecorator];

export const Dark_NoAuth = Template.bind({});
Dark_NoAuth.args = {};
Dark_NoAuth.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({
    user: {
        authData: undefined,
    },
}), RouterDecorator];

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../app/providers/ThemeProvider/inedx';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        isReadonly: true,
        isLoading: false,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    profile: {
        isReadonly: true,
        isLoading: false,
    },
}), ThemeDecorator(THEMES.DARK)];

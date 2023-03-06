import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];



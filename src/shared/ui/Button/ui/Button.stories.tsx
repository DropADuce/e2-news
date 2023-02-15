import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.PRIMARY,
};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Clear_Dark = Template.bind({});
Clear_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.CLEAR,
};
Clear_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Outline_Dark = Template.bind({});
Outline_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
};
Outline_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

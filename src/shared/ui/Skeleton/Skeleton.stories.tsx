import React from 'react';
import {
    ComponentMeta, ComponentStory,
} from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    width: '100%',
    height: 200,
};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Circle_Dark = Template.bind({});
Circle_Dark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
Circle_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Primary_Mint = Template.bind({});
Primary_Mint.args = {
    width: '100%',
    height: 200,
};
Primary_Mint.decorators = [ThemeDecorator(THEMES.MINT)];

export const Circle_MINT = Template.bind({});
Circle_MINT.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
Circle_MINT.decorators = [ThemeDecorator(THEMES.MINT)];

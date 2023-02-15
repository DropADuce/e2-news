import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator';
import { THEMES } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [RouterDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [RouterDecorator, ThemeDecorator(THEMES.DARK)];

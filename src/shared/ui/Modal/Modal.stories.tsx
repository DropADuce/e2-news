import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/inedx';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'storybook example storybook example storybook example storybook example storybook example storybook example storybook example',
    isOpen: true,
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    children: 'storybook example storybook example storybook example storybook example storybook example storybook example storybook example',
    isOpen: true,
};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];


import React from 'react';
import {
    ComponentMeta, ComponentStory,
} from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'import React from \'react\';\n' +
        'import {\n' +
        '    ComponentMeta, ComponentStory,\n' +
        '} from \'@storybook/react\';\n' +
        '\n' +
        'import { Code } from \'./Code\';\n' +
        '\n' +
        'export default {\n' +
        '    title: \'shared/Code\',\n' +
        '    component: Code,\n' +
        '    argTypes: {},\n' +
        '} as ComponentMeta<typeof Code>;',
};

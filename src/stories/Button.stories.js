import React from 'react';

import {Button} from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
        onLogin: { action: '登录完成' }
    },
    // parameters: {
    //     backgrounds: {
    //         values: [
    //             {name: 'story-red', value: 'pink'},
    //             {name: 'story-greed', value: 'olive'}
    //         ]
    //     }
    // }
};

// 定义全局的模版
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
// 只针对单个 测试用例上
Primary.parameters = {
    backgrounds: {
        values: [
            {name: 'story-red', value: 'pink'},
            {name: 'story-greed', value: 'olive'}
        ]
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const LoginButton = Template.bind({});
LoginButton.args = {
    size: 'large',
    label: 'Button',
};

import React from 'react';

import { Button } from './Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    handleClick: { action: 'onClick'}
  },
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  label: 'Button',
};

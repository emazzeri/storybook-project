import React from 'react';
import { Tag } from './Tag/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Light = Template.bind({});
Light.args = {
  type: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark'
};

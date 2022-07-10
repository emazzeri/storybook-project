import { userEvent } from '@storybook/testing-library';
import { within } from '@testing-library/react';
import React from 'react';
import Card from './Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const New = Template.bind({});
New.args = {
  isNew: true,
  rating: 3,
};

export const Used = Template.bind({});
Used.args = {
  isNew: false,
  rating: 4,
};
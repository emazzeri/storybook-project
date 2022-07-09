import React from 'react';
import { StarRating } from './StarRating/StarRating';

export default {
  title: 'Components/StarRating',
  component: StarRating,
};

const Template = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4,
  opinion_count: 5236,
};


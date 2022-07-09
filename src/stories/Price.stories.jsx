import React from 'react';
import { Price } from './Price/Price';

export default {
  title: 'Components/Price',
  component: Price,
};

const Template = (args) => <Price {...args} />;

export const NoSale = Template.bind({});
NoSale.args = {
  currency: '€',
  price: 3256,
};

export const InSale = Template.bind({});
InSale.args = {
  currency: '€',
  price: 3256,
  originalPrice: 3568,
};


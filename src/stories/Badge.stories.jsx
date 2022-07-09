import React from 'react';
import { Badge } from './Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Nuovo = Template.bind({});
Nuovo.args = {
  isNew: true,
  label: 'Nuovo',
};

export const Usato = Template.bind({});
Usato.args = {
  isNew: false,
  label: 'Usato',
};

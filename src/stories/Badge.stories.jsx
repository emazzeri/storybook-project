import React from 'react';
import { Badge } from './Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Badge {...args} />;

export const Nuovo = Template.bind({});
Nuovo.args = {
  color: '#abaecc',
  label: 'Nuovo',
};

export const Usato = Template.bind({});
Usato.args = {
  color: '#ffb000',
  label: 'Usato',
};

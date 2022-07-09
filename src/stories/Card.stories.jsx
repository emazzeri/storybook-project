import React from 'react';
import { Card } from './Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: 'Cannondale',
  year: 2019,
  model: 'Adventure Neo1EQ',
  description: 'Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna',
};


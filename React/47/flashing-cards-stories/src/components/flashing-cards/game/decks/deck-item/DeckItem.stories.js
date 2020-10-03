import React from 'react';

import DeckItem from './DeckItem';

export default {
  title: 'Example/DeckItem',
  component: DeckItem,
  argTypes: {
    backgroundColor: { control: 'color' },
    name: 'string'
    
  },
  
};

const Template = (args) => <DeckItem {...args} data={{name:args.name}} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'DeckItem',
  data: {name:'eliran'},
  name: 'eliran'
};


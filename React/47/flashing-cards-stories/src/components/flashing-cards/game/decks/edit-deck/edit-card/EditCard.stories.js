import React from 'react';

import EditCard from './EditCard';

export default {
  title: 'Example/EditCard',
  component: EditCard,
  argTypes: {
   
    
  },
  
};

const Template = (args) => <EditCard {...args}  />;

export const Primary = Template.bind({});
Primary.args = {
    state: {},
    options: {}
};


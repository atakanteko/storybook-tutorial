import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Todo Input',
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  todo: {
    id: '1',
    placeholder: 'Placeholder',
    text: 'Input text',
  },
};

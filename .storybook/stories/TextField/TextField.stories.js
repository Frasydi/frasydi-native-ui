import React from 'react';
import { View } from 'react-native';
import { TextField } from '../../../src';

const TextInput = {
  title: 'Text Field',
  component: TextField,
  argTypes: {
    label : "",
  },
  args: {
    text: 'Hello world',
    label :"Hello World",
    width :"70%"
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextInput;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};

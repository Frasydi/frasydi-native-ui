import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../src';

const MyButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    label : "Hello",
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
    label :"Hello World",
    width :"70%",
    loading : true
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story  />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic = {};



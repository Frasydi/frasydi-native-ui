import React from 'react';
import { View } from 'react-native';
import { AlertProvider, Button, ThemeProvider, useAlert } from "../../../src"

const AlertButton = ({title, text, type,}) => {
  const alert = useAlert()



  return <Button label="Okok" loading onPress={() => {
    
    alert.alert({title, text, type, buttons : [
      () => <Button label='Okok' width={"50%"} />, () => <Button label='Okok' width={"50%"}  />
    ]})

    if(type == "loading") {
      setTimeout(() => {
        alert.close()
      }, 2000)
    }
  }} />
} 

const TextInput = {
  title: 'Alert Cat',
  component: AlertButton,
  argTypes: {
    label: "",
  },
  args: {
    title :"Hello World",
    text :"Okok",
    type :"success"
  },

  decorators: [
    (Story) => {
      
      return (
      <ThemeProvider>
        <AlertProvider>
          <View style={{flex : 1, justifyContent :"center"}}>
          <Story />
          </View>
         
        </AlertProvider>
      </ThemeProvider>
    )},
  ],
};

export default TextInput;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};

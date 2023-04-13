import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
    title: 'Themed/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: { 
        onClick: { action: 'clicked' },
        colorScheme: {
            options: ["whiteAlpha" , "blackAlpha" , "gray" , "red" , "orange" , "yellow" , "green" , "teal" , "blue" , "cyan" , "purple" , "pink" , "linkedin" , "facebook" , "messenger" , "whatsapp" , "twitter" , "telegram"],
            control: 'select'
        }
}
  }
  
  const Template =  args => <Button {...args} />
  
  export const Success = Template.bind({})
  Success.args = {
    colorScheme: 'green',
    children: 'Success'
  }
  
  export const Danger = Template.bind({})
  Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
  }
  export const Info = Template.bind({})
  Info.args = {
    colorScheme: 'blue',
    children: 'Info'
  }
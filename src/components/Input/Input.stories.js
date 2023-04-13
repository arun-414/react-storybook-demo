import  {Input}   from './Input'

export default {
    title: 'Form/Input',
    component: Input ,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        variant: {
            options: ['small','normal','big','standard'],
            control: 'select'
        }
    }
} 
const Template = args => <Input {...args} />
export const Standard = Template.bind({})
Standard.args = {
    variant:'standard',
    name:'Standard'
}
export const Normal = Template.bind({})
Normal.args = {
    variant:'normal',
    name:'Normal'
}
export const  Big = Template.bind({})
Big.args = {
    variant:'big',
    name:'Big'
}
export const  Small = Template.bind({})
Small.args = {
    variant:'small',
    name:'Small'
}

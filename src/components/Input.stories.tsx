import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './Input'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/Input',
    component: Input.Root,
    args: {
        children: [
                <Input.Icon>
                    <Envelope />
                </Input.Icon>,
                <Input.Input placeholder='type your e-mail' />
        ],
    },
    argTypes: {}
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}

export const WithOutIcon : StoryObj<InputProps> = {
    args:{
        children: <Input.Input placeholder='type your e-mail' />
    }
}
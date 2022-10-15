import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn, SignInProps } from './SignIn'
import { rest } from 'msw'

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {
        title: 'Ignite Lab 2022'
    },
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({ res }))
                })
            ]
        }
    }
} as Meta<SignInProps>

export const Default: StoryObj<SignInProps> = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'pablolucio_@hotmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '123456')
        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Authenticado')).toBeInTheDocument()
        })
    }
}
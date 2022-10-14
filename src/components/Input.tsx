import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface InputRootProps {
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface InputIconProps {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return (
    <div className="h-12 flex items-center gap-3 text-white100 bg-gray800 font-sans rounded focus-within:ring-2 py-4 px-3 w-full">
      {children}
    </div>
  )
}

InputRoot.displayName = 'Input.Root'

export function InputInput(props: InputProps) {
  return (
    <input className={
      clsx('bg-transparent outline-none text-white100 ')
    }
      {...props}
    />
  )
}

InputInput.displayName = 'Input.Input'

export function InputIcon({ children }: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-white100">
      {children}
    </Slot>
  )
}

InputIcon.displayName = 'Input.Icon'

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
}
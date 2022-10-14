import {Slot} from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}


export function Text({ size = 'md', children, asChild }: TextProps){

  const Comp = asChild ? Slot : 'span'

  return (
    <Comp className={
      clsx('text-white100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })
    }>
      {children}
    </Comp>
  )
}
import clsx from 'clsx'
import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export function CheckBox() {

  return (
    <CheckBoxPrimitive.Root className={
      clsx('w-6 h-6 bg-gray800 rounded')
    }>
      <CheckBoxPrimitive.Indicator>
        <Check weight='bold' className='h-5 w-5 text-cyan500' />
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  )
}
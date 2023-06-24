'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  CheckboxProps
> = (props, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-indigo-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export const Checkbox = forwardRef(CheckboxBase)

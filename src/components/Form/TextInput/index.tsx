import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full outline-none  focus-within:ring-2 ring-indigo-500">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputInputProps
> = (props, ref) => {
  return (
    <input
      autoComplete="off"
      ref={ref}
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none focus:shadow-none',
        props.className,
      )}
      {...props}
    />
  )
}

const TextInputInput = forwardRef(TextInputBase)

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}

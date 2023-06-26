import * as Select from '@radix-ui/react-select'
import { CaretDown, Check } from '@/assets/icons/phosphorIcons'
import { clsx } from 'clsx'
import { ForwardRefRenderFunction, ReactNode, forwardRef } from 'react'

interface SelectInputProps extends Select.SelectTriggerProps {
  children: ReactNode
}

export function SelectInput({ children, ...props }: SelectInputProps) {
  return (
    <Select.Root>
      <Select.Trigger
        {...props}
        className={clsx(
          'bg-gray-800 text-gray-100 text-sm py-4 px-3 w-full flex items-center justify-between hover:bg-gray-70 rounded-md',
        )}
      >
        <Select.Value placeholder="John Do da Silva" />
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-gray-500 rounded-md">
          <Select.Viewport className="p-2">{children}</Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

interface SelectItemProps extends Select.SelectItemProps {
  children: ReactNode
}

const SelectItemBase: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectItemProps
> = ({ children, ...props }, ref) => {
  return (
    <Select.Item
      ref={ref}
      className="text-sm text-gray-100 rounded-sm flex p-2 relative select-none items-center gap-2 focus:border-none focus:outline-none"
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export const SelectItem = forwardRef(SelectItemBase)

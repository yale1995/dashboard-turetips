'use client'

import { MagnifyingGlass } from '@/assets/icons/phosphorIcons'
import { TextInput } from '@/components/Form/TextInput'
import { Logo } from '@/components/Logo'
import { Profile } from './Profile'

export function Header() {
  return (
    <header className="py-4">
      <div className="flex justify-between px-4">
        <div className="flex items-center gap-10 w-full">
          <div className="w-44">
            <Logo />
          </div>
          <div className="max-w-lg w-full">
            <TextInput.Root>
              <TextInput.Input
                placeholder="O que você está buscando?"
                className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none focus:shadow-none"
              />
              <TextInput.Icon>
                <MagnifyingGlass />
              </TextInput.Icon>
            </TextInput.Root>
          </div>
        </div>

        <Profile />
      </div>
    </header>
  )
}

import { MagnifyingGlass } from '@/assets/icons/phosphorIcons'
import { TextInput } from '@/components/Form/TextInput'
import { Avatar } from '@/components/Header/Avatar'
import { Logo } from '@/components/Logo'
import { Heading } from '@/components/Text/Heading'
import { Paragraph } from '@/components/Text/Paragraph'

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
              <TextInput.Input placeholder="O que você está buscando?" />
              <TextInput.Icon>
                <MagnifyingGlass />
              </TextInput.Icon>
            </TextInput.Root>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Heading
              size="sm"
              className="text-gray-300 font-normal text-right "
            >
              Caio Rodrigo
            </Heading>
            <Paragraph size="md" className="text-gray-500">
              caiorodrigo@turetips.com
            </Paragraph>
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  )
}

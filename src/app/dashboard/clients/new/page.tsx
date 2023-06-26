'use client'

import { Users } from '@/assets/icons/phosphorIcons'
import { Button } from '@/components/Form/Button'
import { TextInput } from '@/components/Form/TextInput'
import { Heading } from '@/components/Text/Heading'
import { Paragraph } from '@/components/Text/Paragraph'

export default function NewClientRegister() {
  return (
    <div className="flex-1">
      <Heading>Novo Investidor</Heading>

      <form className="py-4">
        <div className="flex w-full gap-4">
          <label htmlFor="name" className="w-full">
            <Paragraph size="lg" className="py-4 block">
              Nome
            </Paragraph>
            <TextInput.Root>
              <TextInput.Icon>
                <Users />
              </TextInput.Icon>
              <TextInput.Input type="text" id="name" name="name" />
            </TextInput.Root>
          </label>

          <label htmlFor="name" className="w-full">
            <Paragraph size="lg" className="py-4 block">
              Nome
            </Paragraph>
            <TextInput.Root>
              <TextInput.Icon>
                <Users />
              </TextInput.Icon>
              <TextInput.Input type="text" id="name" name="name" />
            </TextInput.Root>
          </label>
        </div>

        <div className="flex gap-4">
          <label htmlFor="login" className="w-full">
            <Paragraph size="lg" className="py-4 block">
              Login da conta:
            </Paragraph>
            <TextInput.Root>
              <TextInput.Icon>
                <Users />
              </TextInput.Icon>
              <TextInput.Input
                type="text"
                id="login"
                name="login"
                placeholder="login123"
              />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="w-full">
            <Paragraph size="lg" className="py-4 block">
              Senha da conta:
            </Paragraph>
            <TextInput.Root>
              <TextInput.Icon>
                <Users />
              </TextInput.Icon>
              <TextInput.Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
              />
            </TextInput.Root>
          </label>
        </div>
        <div className="max-w-xs ml-auto py-5">
          <Button>Cadastrar</Button>
        </div>
      </form>
    </div>
  )
}

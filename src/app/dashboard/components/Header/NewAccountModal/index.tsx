import * as Dialog from '@radix-ui/react-dialog'

import { Users, X } from '@/assets/icons/phosphorIcons'
import { Button } from '@/components/Form/Button'
import { TextInput } from '@/components/Form/TextInput'
import { Paragraph } from '@/components/Text/Paragraph'
import { SelectInput, SelectItem } from '@/components/Form/SelectInput'

export function NewAccountModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />

      <Dialog.Content className="max-w-3xl py-10 px-12 w-full rounded-md bg-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title className="text-gray-500 text-center text-xl font-bold">
          Adicionar nova conta
        </Dialog.Title>
        <Dialog.Close className="absolute bg-transparent border-0 top-6 right-6">
          <X className="text-gray-300" />
        </Dialog.Close>
        <Dialog.Description asChild>
          <form className="py-4">
            <label htmlFor="ownerAccount" className="">
              <Paragraph size="lg" className="py-4 block">
                Selecione o investidor
              </Paragraph>
              <SelectInput>
                <SelectItem value="keko">Keko</SelectItem>
                <SelectItem value="foca">Foca</SelectItem>
                <SelectItem value="levandowisk">Levandowisk</SelectItem>
              </SelectInput>
            </label>

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

            <div className="flex gap-4 pb-4">
              <label className="w-full">
                <Paragraph size="lg" className="py-4 block">
                  Saldo inicial
                </Paragraph>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Users />
                  </TextInput.Icon>
                  <TextInput.Input
                    id="initialBalance"
                    name="initialBalance"
                    type="number"
                    placeholder="R$12.000"
                  />
                </TextInput.Root>
              </label>

              <label htmlFor="stake" className="w-full">
                <Paragraph size="lg" className="py-4 block">
                  Stake
                </Paragraph>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Users />
                  </TextInput.Icon>
                  <TextInput.Input
                    name="stake"
                    id="stake"
                    type="number"
                    placeholder="R$1.500"
                  />
                </TextInput.Root>
              </label>
            </div>
            <Button>Cadastrar</Button>
          </form>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

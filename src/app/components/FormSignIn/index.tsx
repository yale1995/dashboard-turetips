'use client'

import { Envelope, Lock } from '@/assets/icons/phosphorIcons'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { TextInput } from '@/components/Form/TextInput'
import { Paragraph } from '@/components/Text/Paragraph'

import { useForm, Controller } from 'react-hook-form'

export function FormSignIn() {
  const { register, handleSubmit, control } = useForm()

  function handleSignIn(data: any) {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <label htmlFor="email" className="flex flex-col gap-3">
        <Paragraph className="font-semibold">Endereço de email</Paragraph>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input
            id="email"
            type="text"
            placeholder="Digite seu email"
            {...register('email')}
          />
        </TextInput.Root>
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <Paragraph className="font-semibold">Sua senha</Paragraph>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input
            id="password"
            type="password"
            placeholder="**********"
            {...register('password')}
          />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Controller
          control={control}
          name="remember"
          render={({ field }) => (
            <Checkbox
              id="remember"
              onCheckedChange={(value: boolean) => field.onChange(value)}
              value={field.value}
            />
          )}
        />
        <Paragraph size="sm" className="text-gray-200">
          Lembrar de mim por 30 dias
        </Paragraph>
      </label>
      <Button type="submit">Entrar na plataforma</Button>
    </form>
  )
}

'use client'
import * as z from 'zod'

import { Envelope, Lock } from '@/assets/icons/phosphorIcons'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { TextInput } from '@/components/Form/TextInput'
import { Paragraph } from '@/components/Text/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm, Controller } from 'react-hook-form'

const formSignInSchema = z.object({
  email: z.string().email({ message: 'Por favor digite um email válido' }),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
  remember: z.boolean(),
})

type signInUser = z.infer<typeof formSignInSchema>

export function FormSignIn() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signInUser>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      remember: false,
    },
  })

  function handleSignIn(data: signInUser) {
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
        <Paragraph className="text-red-500" size="sm">
          {errors.email?.message}
        </Paragraph>
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
        <Paragraph className="text-red-500" size="sm">
          {errors.password?.message}
        </Paragraph>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Controller
          control={control}
          name="remember"
          render={({ field }) => {
            return (
              <Checkbox
                id="remember"
                onCheckedChange={(checked: boolean) => field.onChange(checked)}
                checked={field.value}
              />
            )
          }}
        />
        <Paragraph size="sm" className="text-gray-200">
          Lembrar de mim por 30 dias
        </Paragraph>
      </label>
      <Button type="submit">Entrar na plataforma</Button>
    </form>
  )
}

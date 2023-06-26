'use client'

import * as z from 'zod'

import { Users } from '@/assets/icons/phosphorIcons'
import { Button } from '@/components/Form/Button'
import { TextInput } from '@/components/Form/TextInput'
import { Paragraph } from '@/components/Text/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/services/http-client/api'
import { useRouter } from 'next/navigation'
import { phoneNumberMask } from '@/utils/mask'

const formAddNewClientSchema = z.object({
  firstName: z.string().min(3, 'O nome precisa de no mínimo 3 caractéres'),
  lastName: z.string().min(3, 'O sobrenome precisa de no mínimo 3 caractéres'),
  email: z.string().email(),
  phoneNumber: z.string().min(15, 'Número de telefone inválido'),
})

type newClient = z.infer<typeof formAddNewClientSchema>

export function AddNewClientForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newClient>({
    resolver: zodResolver(formAddNewClientSchema),
    defaultValues: {
      phoneNumber: '',
    },
  })

  async function handleAddNewClient(data: newClient) {
    const newClient = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber.replace(/\D/g, ''),
    }

    try {
      const response = await api.post('/clients', newClient, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IlVzZXIiLCJfX2VudGl0eSI6IlJvbGUifSwiaWF0IjoxNjg3ODAxMzI0LCJleHAiOjE2ODc4ODc3MjR9.KvzDBaj_p6j_XiyWQ0VRjXHxDkb0dSOu43Qoo7vUhQM',
        },
      })

      if (response.status === 201) {
        router.push('/dashboard/clients')
      }
    } catch (Error: any) {
      window.alert(Error.message)
    }
  }

  return (
    <form className="py-4" onSubmit={handleSubmit(handleAddNewClient)}>
      <div className="flex w-full gap-4">
        <label htmlFor="firstName" className="w-full">
          <Paragraph size="lg" className="py-4 block">
            Nome
          </Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Users />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="firstName"
              placeholder="John"
              {...register('firstName')}
            />
          </TextInput.Root>
          <Paragraph className="text-red-500">
            {errors.firstName?.message}
          </Paragraph>
        </label>

        <label htmlFor="lastName" className="w-full">
          <Paragraph size="lg" className="py-4 block">
            Sobrenome
          </Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Users />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="lastName"
              placeholder="Do"
              {...register('lastName')}
            />
          </TextInput.Root>
          <Paragraph className="text-red-500">
            {errors.lastName?.message}
          </Paragraph>
        </label>
      </div>

      <div className="flex gap-4">
        <label htmlFor="email" className="w-full">
          <Paragraph size="lg" className="py-4 block">
            Email
          </Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Users />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="email"
              placeholder="user.123@gmail.com"
              {...register('email')}
            />
          </TextInput.Root>
          <Paragraph className="text-red-500">
            {errors.email?.message}
          </Paragraph>
        </label>

        <label htmlFor="password" className="w-full">
          <Paragraph size="lg" className="py-4 block">
            Telefone
          </Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Users />
            </TextInput.Icon>
            <TextInput.Input
              id=""
              type="text"
              placeholder="(99) 9 9999-9999"
              onKeyUp={phoneNumberMask}
              {...register('phoneNumber')}
            />
          </TextInput.Root>
          <Paragraph className="text-red-500">
            {errors.phoneNumber?.message}
          </Paragraph>
        </label>
      </div>
      <div className="w-1/4 ml-auto py-5">
        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  )
}

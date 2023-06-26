'use client'

import { Heading } from '@/components/Text/Heading'
import { AddNewClientForm } from './components/AddNewClientForm'

export default function NewClientRegister() {
  return (
    <div className="flex-1">
      <Heading>Novo Investidor</Heading>
      <AddNewClientForm />
    </div>
  )
}

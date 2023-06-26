import Link from 'next/link'

import { Button } from '@/components/Form/Button'
import { Heading } from '@/components/Text/Heading'
import { ClientsList } from './components/ClientsList'

export default async function ClientList() {
  return (
    <div>
      <Heading size="lg">Meus clientes</Heading>
      <main className="w-full mx-auto text-gray-100">
        <ClientsList />
        <div className="w-56 py-5 ml-auto">
          <Button asChild>
            <Link href="/dashboard/clients/new" className="block text-center">
              Cadastrar Novo Cliente
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

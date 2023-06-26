import Link from 'next/link'

import { Button } from '@/components/Form/Button'
import { Heading } from '@/components/Text/Heading'
import { ClientsList } from './components/ClientsList'

export default async function ClientList() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading size="lg">Meus clientes</Heading>
        <div className="w-56 py-5 ml-auto">
          <Button asChild>
            <Link href="/dashboard/clients/new" className="block text-center">
              Adicionar novo investidor
            </Link>
          </Button>
        </div>
      </div>

      <main className="w-full mx-auto text-gray-100">
        <ClientsList />
      </main>
    </div>
  )
}

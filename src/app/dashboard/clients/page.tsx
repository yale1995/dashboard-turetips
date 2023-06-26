import { Button } from '@/components/Form/Button'
import { Heading } from '@/components/Text/Heading'
import { api } from '@/services/http-client/api'
import { dateFormatter, phoneFormatter } from '@/utils/formatter'
import Link from 'next/link'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  __entity: string
}

export default async function ClientList() {
  const response = await api.get('/clients')
  const clients: User[] = response.data.data

  return (
    <div>
      <Heading size="lg">Meus clientes</Heading>
      <main className="w-full mx-auto text-gray-100">
        <table className="w-full border-collapse border-spacing-x-0 border-spacing-y-2 mt-6 bg-gray-800">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-5 px-8 text-xs text-left text-gray-500 rounded-tl-md">
                NOME
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                SOBRENOME
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                EMAIL
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                TELEFONE
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                DATA CADASTRO
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t-gray-900 border-t-4">
                <td className="py-5 px-8 text-base text-left text-gray-300">
                  {client.firstName}
                </td>
                <td className="py-5 px-8 text-base text-left text-gray-300">
                  {client.lastName}
                </td>
                <td className="py-5 px-8 text-base text-left text-gray-300">
                  {client.email}
                </td>
                <td className="py-5 px-8 text-base text-left text-gray-300">
                  {phoneFormatter(client.phoneNumber)}
                </td>
                <td className="py-5 px-8 text-base text-left text-gray-300">
                  {dateFormatter.format(new Date(client.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

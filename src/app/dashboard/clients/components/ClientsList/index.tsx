'use client'

import { dateFormatter, phoneFormatter } from '@/utils/formatter'
import { api } from '@/services/http-client/apiClient'
import { useEffect, useState } from 'react'
import { Pagination } from '@/app/dashboard/components/Pagination'

type ResponseAPI = {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  __entity?: string
}

type ClientType = Omit<ResponseAPI, '__entity'>

export function ClientsList() {
  const [clients, setClients] = useState<ClientType[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    try {
      api.get('clients', { params: { page, limit: 6 } }).then((response) => {
        const modifiedData = response.data.data.map((client: ResponseAPI) => {
          delete client.__entity
          return client
        })

        setClients(modifiedData)
      })
    } catch (Error) {
      console.log(Error)
    }
  }, [page])

  return (
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
            <th className="py-5 px-8 text-xs text-left text-gray-500">EMAIL</th>
            <th className="py-5 px-8 text-xs text-left text-gray-500">
              TELEFONE
            </th>
            <th className="py-5 px-8 text-xs text-left text-gray-500">
              DATA CADASTRO
            </th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client) => (
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
      <Pagination
        totalCountOfRegister={20}
        currentPage={page}
        onPageChange={setPage}
      />
    </main>
  )
}

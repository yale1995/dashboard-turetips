import { Heading } from '@/components/Text/Heading'
import { Button } from '@/components/Form/Button'

export default function ClientList() {
  return (
    <div>
      <Heading size="lg">Meus clientes</Heading>
      <main className="w-full mx-auto text-gray-100">
        <table className="w-full border-collapse border-spacing-x-0 border-spacing-y-2 mt-6 bg-gray-800">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-5 px-8 w-1/ text-xs text-left text-gray-500 rounded-tl-md">
                NOME DO CLIENTE
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                LOGIN
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                SENHA
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                SALDO INICIAL
              </th>
              <th className="py-5 px-8 text-xs text-left text-gray-500">
                SALDO FINAL
              </th>
              <th className="py-5 px-8 text-xs text-center text-gray-500 rounded-tr-md">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-gray-900 border-t-4">
              <td className="py-5 px-8 w-1/3 text-base text-left text-gray-300">
                Caio Rodrigo
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                teste123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                senhas123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                <span className="flex items-center justify-center gap-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full" />
              </td>
            </tr>

            <tr className="border-t-gray-900 border-t-4">
              <td className="py-5 px-8 w-1/3 text-base text-left text-gray-300">
                Caio Rodrigo
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                teste123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                senhas123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                <span className="flex items-center justify-center gap-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full" />
              </td>
            </tr>
            <tr className="border-t-gray-900 border-t-4">
              <td className="py-5 px-8 w-1/3 text-base text-left text-gray-300">
                Caio Rodrigo
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                teste123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                senhas123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                <span className="flex items-center justify-center gap-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full" />
              </td>
            </tr>
            <tr className="border-t-gray-900 border-t-4">
              <td className="py-5 px-8 w-1/3 text-base text-left text-gray-300">
                Caio Rodrigo
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                teste123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                senhas123
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                R$ 12.000
              </td>
              <td className="py-5 px-8 text-base text-left text-gray-300">
                <span className="flex items-center justify-center gap-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="max-w-xs py-5 ml-auto">
          <Button>Cadastrar Novo Cliente</Button>
        </div>
      </main>
    </div>
  )
}

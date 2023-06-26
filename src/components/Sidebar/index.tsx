import { DotsNine, UserList, Users } from '@/assets/icons/phosphorIcons'
import { Heading } from '@/components/Text/Heading'
import { Paragraph } from '@/components/Text/Paragraph'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="h-full">
      <nav className="flex flex-col gap-4 w-44">
        <Heading className="text-xs text-gray-600 pb-4">DASHBOARD</Heading>
        <Paragraph asChild className={`text-indigo-500 font-bold`} size="lg">
          <Link href="/" className="flex items-center gap-2">
            <DotsNine size={20} />
            Home
          </Link>
        </Paragraph>

        <Paragraph asChild className="text-gray-300 font-bold" size="lg">
          <Link href="/" className="flex items-center gap-2">
            <Users size={20} />
            Clientes
          </Link>
        </Paragraph>

        <Paragraph asChild className="text-gray-300 font-bold" size="lg">
          <Link href="/" className="flex items-center gap-2">
            <UserList size={20} />
            Contas
          </Link>
        </Paragraph>

        <Paragraph asChild className="text-gray-300 font-bold" size="lg">
          <Link href="/" className="flex items-center gap-2">
            <UserList size={20} />
            Resultados
          </Link>
        </Paragraph>
      </nav>
    </aside>
  )
}

'use client'

import { Heading } from '@/components/Text/Heading'
import { NavLink } from '../NavLink'

import {
  DotsNine,
  TrendUp,
  UserList,
  Users,
} from '@/assets/icons/phosphorIcons'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-4 w-44">
      <Heading className="text-xs text-gray-600 pb-4">DASHBOARD</Heading>
      <NavLink pathname="/dashboard">
        <DotsNine size={20} />
        Home
      </NavLink>

      <NavLink pathname="/dashboard/clients">
        <Users size={20} />
        Clientes
      </NavLink>

      <NavLink pathname="/dashboard/accounts">
        <UserList size={20} />
        Contas
      </NavLink>

      <NavLink pathname="/dashboard/results">
        <TrendUp size={20} />
        Resultados
      </NavLink>
    </nav>
  )
}

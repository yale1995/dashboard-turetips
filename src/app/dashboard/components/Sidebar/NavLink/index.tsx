import Link from 'next/link'

import { Paragraph } from '@/components/Text/Paragraph'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  children: ReactNode
  pathname: string
}

export function NavLink({ children, pathname }: NavLinkProps) {
  const currentPathname = usePathname()
  const activedLink = pathname === currentPathname

  return (
    <Paragraph
      asChild
      className={`font-bold  focus:shadow-none ${
        !activedLink ? 'text-gray-300 hover:text-gray-400' : 'text-indigo-500 '
      }`}
      size="lg"
    >
      <Link href={pathname} className="flex items-center gap-2">
        {children}
      </Link>
    </Paragraph>
  )
}

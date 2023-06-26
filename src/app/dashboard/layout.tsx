import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboadLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="bg-gray-900 h-screen w-full">
      <Header />
      <div className="flex gap-10 px-4">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

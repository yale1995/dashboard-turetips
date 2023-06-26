import { Header } from '@/components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Summary } from './components/Summary'

export default function Dashboard() {
  return (
    <div className="bg-gray-900 h-screen w-full">
      <Header />
      <div className="flex gap-10 px-4">
        <Sidebar />
        <Summary />
      </div>
    </div>
  )
}

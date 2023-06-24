import { Users } from '@/assets/icons/phosphorIcons'
import { Heading } from '@/components/Text/Heading'

export function SummaryCard() {
  return (
    <div className="p-6 bg-gray-800 rounded-md">
      <header className="flex items-center justify-between">
        <Heading size="sm" className="font-normal text-gray-400">
          Contas Ativas
        </Heading>
        <Users weight="bold" size={24} className="text-gray-400" />
      </header>
      <strong className="pt-8 text-3xl block text-gray-200">59 UNDS</strong>
    </div>
  )
}

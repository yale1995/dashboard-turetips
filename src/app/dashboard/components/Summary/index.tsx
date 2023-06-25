import { SummaryCard } from './SummaryCard'

export function Summary() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-3 gap-4">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  )
}

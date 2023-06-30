interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return <button className="bg-indigo-600 rounded-md p-2">{number}</button>
  }

  return (
    <button
      className="bg-gray-400 rounded-md p-2 hover:bg-indigo-600"
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  )
}

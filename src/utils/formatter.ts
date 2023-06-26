export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function phoneFormatter(phoneNumber: string) {
  const formattedPhoneNumber = phoneNumber.replace(
    /(\D{1})(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/gim,
    '($3) $4 $5-$6',
  )
  return formattedPhoneNumber
}

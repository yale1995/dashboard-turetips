export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function phoneFormatter(phoneNumber: string) {
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{2})(\d{5})(\d{4})/gim,
    '($1) $2-$3',
  )
  return formattedPhoneNumber
}

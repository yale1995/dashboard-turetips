import { FormEvent } from 'react'

export function phoneNumberMask(event: FormEvent<HTMLInputElement>) {
  event.preventDefault()

  event.currentTarget.maxLength = 15
  let maskedCurrentText = event.currentTarget.value
  maskedCurrentText = maskedCurrentText.replace(/\D/g, '')
  maskedCurrentText = maskedCurrentText.replace(/^(\d{2})(\d)/g, '($1) $2')
  maskedCurrentText = maskedCurrentText.replace(/(\d)(\d{4})$/, '$1-$2')
  event.currentTarget.value = maskedCurrentText

  return event
}

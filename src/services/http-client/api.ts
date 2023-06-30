import axios from 'axios'
import { parseCookies } from 'nookies'

export const setupAPIClient = (ctx = undefined) => {
  const userCookies = parseCookies(ctx)

  const token = userCookies['auth.token']

  const api = axios.create({
    baseURL: 'https://brooker-manager.onrender.com/api/v1',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return api
}

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://brooker-manager.onrender.com/api/v1',
})

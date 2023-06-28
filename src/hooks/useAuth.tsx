import { ReactNode, createContext, useContext, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/http-client/api'

type SignInCredentials = {
  email: string
  password: string
}

type User = {
  id: number
  firstName: string
  lastName: string
  createdAt: string
  photo: string | null
  status: { name: 'active' | 'inactive' }
  role: { name: string }
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  currentUser: User | null
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const router = useRouter()

  const isAuthenticated = !!currentUser

  function signOut() {
    destroyCookie(undefined, 'auth.token')
    router.push('/')
  }

  async function signIn({ email, password }: SignInCredentials) {
    console.log(email, password)
    try {
      const response = await api.post('auth/email/login', {
        email,
        password,
      })

      console.log(response)

      const { token, user, status } = response.data

      setCookie(undefined, 'auth.token', token, {
        maxAge: 60 * 60 * 24, // 24h
        path: '/',
      })

      setCurrentUser({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
        createdAt: user.createdAt,
        role: { name: user.role.name },
        status: { name: status.name },
      })

      api.defaults.headers.Authorization = `Bearer ${token}`
      router.push('/dashboard')
    } catch (Error) {
      console.log(Error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ signOut, signIn, currentUser, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}

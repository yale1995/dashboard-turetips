import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/http-client/apiClient'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type SignInCredentials = {
  email: string
  password: string
}

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  createdAt: string
  photo: string | undefined
  status: 'active' | 'inactive'
  role: string
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function signOut() {
    destroyCookie(undefined, 'auth.token')
    router.push('/')
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/email/login', {
        email,
        password,
      })

      const { token, user } = response.data

      setCookie(undefined, 'auth.token', token, {
        maxAge: 60 * 60 * 1, // 1h
        path: '/',
      })

      setCurrentUser({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
        createdAt: user.createdAt,
        role: user.role.name,
        status: user.status.name,
        email: user.email,
      })

      api.defaults.headers.Authorization = `Bearer ${token}`
      router.push('/dashboard')
    } catch (Error) {
      console.log(Error)
      window.alert(
        'Nosso aplicação está em manutenção tente novamente mais tarde.',
      )
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    const token = cookies['auth.token']

    api.defaults.headers.Authorization = `Bearer ${token}`

    if (token) {
      api
        .get('auth/me')
        .then((response) => {
          const {
            id,
            firstName,
            lastName,
            email,
            photo,
            createdAt,
            role,
            status,
          } = response.data

          setCurrentUser({
            id,
            firstName,
            lastName,
            email,
            photo,
            createdAt,
            role: role.name,
            status: status.name,
          })

          router.push('/dashboard')
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signOut,
        signIn,
        currentUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}

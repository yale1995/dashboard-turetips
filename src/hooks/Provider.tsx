'use client'
import { ReactNode } from 'react'
import { AuthProvider } from './useAuth'

interface AuthProviderProps {
  children: ReactNode
}

export function Provider({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>
}

import '../styles/globals.css'
import React from 'react'

import { Roboto } from 'next/font/google'
import { Provider } from '@/hooks/Provider'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'turetips | investimentos esportivos',
  description: 'Gestão e gerenciamento de contas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Provider>
        <body className={roboto.className}>{children}</body>
      </Provider>
    </html>
  )
}

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxWrapper from '@/components/ReduxWrapper/ReduxWrapper'
import Background from '@/components/Background/Background'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col z-0" >
          <Background />
          <Header />
          <ReduxWrapper>{children}</ReduxWrapper>
        </div>
      </body>
    </html>
  )
}

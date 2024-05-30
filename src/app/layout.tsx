import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { FBScript } from '@/components/fb/sdk'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kantoor Van de Casteele',
  description:
    'Kantoor Van de Casteele is uw expert in verzekeringen, kredieten en beleggen. Ons streefdoel is een oplossing op maat van de klant zoeken op een persoonlijke, menselijke en betrokken manier waarbij de klantentevredenheid onze nummer één prioriteit is.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <FBScript />
        <>{children}</>
      </body>
    </html>
  )
}

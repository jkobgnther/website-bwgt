import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cookiebot from '@/components/Cookiebot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bewegungskoordinator Tempelhof-Schöneberg',
  description: 'Kostenlose Beratung zu Sport- und Bewegungsangeboten im Bezirk Tempelhof-Schöneberg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Cookiebot />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}









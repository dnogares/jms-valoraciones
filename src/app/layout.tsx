import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'JMS Valoraciones | Tasación de Fincas Rústicas en Murcia y Almería',
    template: '%s | JMS Valoraciones',
  },
  description:
    'Ingeniero agrícola homologado por el Banco de España. Tasaciones precisas de fincas rústicas en Murcia y Almería para compraventa, hipotecas, herencias y más.',
  keywords: ['tasación fincas rústicas', 'valoración agrícola', 'Murcia', 'Almería', 'ingeniero agrícola', 'Banco de España'],
  metadataBase: new URL('https://www.geotasalia.es'),
  openGraph: {
    siteName: 'JMS Valoraciones',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-white text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

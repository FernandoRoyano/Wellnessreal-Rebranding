import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WellnessReal - Entrenamiento, Nutrición y Osteopatía en Santander',
  description:
    'Transforma tu salud con planes personalizados de entrenamiento, nutrición y recuperación. Primera sesión gratuita.',
  keywords: 'entrenamiento personal, nutrición, osteopatía, santander, wellness, fitness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="font-sans bg-morado-intenso text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

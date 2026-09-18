import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leal y Asociados | Consultoría contable, tributaria y financiera',
  description:
    'Más de 8 años asesorando empresas y emprendedores en contabilidad, tributación, finanzas y recursos humanos. Servicio profesional, cercano y orientado a resultados.',
  keywords: [
    'contabilidad',
    'asesoría tributaria',
    'constitución de empresas',
    'remuneraciones',
    'consultoría financiera',
    'Chile',
    'pymes',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Leal y Asociados | Consultoría contable y tributaria',
    description:
      'Impulsamos el crecimiento de tu empresa con soluciones contables y tributarias.',
    locale: 'es_CL',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d2340',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className={`bg-background ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

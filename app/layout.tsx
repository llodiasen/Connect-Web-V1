import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, Instrument_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://connect-web.tech'),
  title: {
    default: 'Connect WebTech — Agence technique Dakar | Next.js · Odoo · SaaS',
    template: '%s | Connect WebTech',
  },
  description:
    'Agence technique basée à Dakar. Nous construisons des systèmes digitaux qui fonctionnent quand nous ne sommes plus là — applications, e-commerce, ERP, SaaS.',
  keywords: [
    'agence web Dakar',
    'développement Next.js Sénégal',
    'ERP Odoo Dakar',
    'SaaS Sénégal',
    'agence digitale Dakar',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://connect-web.tech',
    siteName: 'Connect WebTech',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmMono.variable} ${instrumentSans.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://connect-web.tech'),
  title: {
    default: 'Connect Web — Agence digitale Dakar | Sites & Apps en 2 semaines',
    template: '%s | Connect Web',
  },
  description:
    'Agence digitale tech-first à Dakar. Sites web, applications, automatisation & IA. Livraison en 2 semaines. Lighthouse 95+. Devis gratuit.',
  keywords: ['agence web Dakar', 'agence digitale Sénégal', 'création site web Dakar', 'développement application Dakar'],
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://connect-web.tech',
    siteName: 'Connect Web',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,400&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

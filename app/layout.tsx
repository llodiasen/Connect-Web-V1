import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

// Playfair Display = substitut temporaire pour Clash Display
// Pour activer Clash Display :
//   1. Télécharger ClashDisplay-Variable.woff2 sur fontshare.com/fonts/clash-display
//   2. Placer dans /public/fonts/
//   3. Remplacer ces lignes par next/font/local
const clashDisplay = Playfair_Display({
  variable: '--font-clash',
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
    <html lang="fr" className={`${inter.variable} ${clashDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}

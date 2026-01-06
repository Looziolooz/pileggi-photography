import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Antonio Pileggi - Fotografo Matrimoni e Ritratti',
  description: 'Fotografia di matrimoni, ritratti e eventi con stile minimalista e vintage.',
  keywords: ['fotografo matrimoni', 'fotografo ritratti', 'fotografo eventi', 'Sicilia'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-charcoal font-sans"
      cz-shortcut-listen="true">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
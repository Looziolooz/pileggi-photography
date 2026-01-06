import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.antoniopileggi.com'),
  title: {
    default: 'Antonio Pileggi - Fotografo Matrimoni e Ritratti',
    template: '%s | Antonio Pileggi Photography'
  },
  description: 'Fotografia di matrimoni, ritratti e eventi con stile minimalista e vintage in Sicilia. 15 anni di esperienza nella fotografia d\'autore.',
  keywords: [
    'fotografo matrimoni',
    'fotografo ritratti', 
    'fotografo eventi',
    'Sicilia',
    'wedding photographer',
    'fotografia matrimonio',
    'fotografia ritratti',
    'Antonio Pileggi',
    'fotografo professionista'
  ],
  authors: [{ name: 'Antonio Pileggi' }],
  creator: 'Antonio Pileggi',
  publisher: 'Antonio Pileggi',
  
  openGraph: {
    type: 'website',
    // Nota: Il locale qui è statico, idealmente dovrebbe essere dinamico in base alla lingua corrente
    locale: 'it_IT', 
    url: '/',
    title: 'Antonio Pileggi - Fotografo Matrimoni e Ritratti',
    description: 'Fotografia di matrimoni, ritratti e eventi con stile minimalista e vintage.',
    siteName: 'Antonio Pileggi Photography',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonio Pileggi Photography',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Pileggi - Fotografo Matrimoni',
    description: 'Fotografia di matrimoni, ritratti e eventi con stile minimalista e vintage.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
  },
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  
  // Attende i parametri (richiesto in Next.js 15+)
  const { locale } = await params
  
  // Recupera i messaggi di traduzione lato server
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FAFAF8" />
      </head>
      
      <body 
        className="bg-cream text-charcoal font-sans antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {/* Skip to main content per accessibilità */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-charcoal focus:text-white"
          >
            Salta al contenuto principale
          </a>
          
          <Navigation />
          
          <main id="main-content">
            {children}
          </main>
          
          <Footer />
        </NextIntlClientProvider>

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
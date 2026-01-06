'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log dell&apos;errore a servizio di monitoring (es. Sentry)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-6xl text-charcoal mb-4">Oops!</h1>
        
        <h2 className="font-serif text-3xl text-charcoal mb-6">
          Qualcosa è andato storto
        </h2>
        
        <p className="font-sans text-lg text-warmGray mb-8">
          Ci scusiamo per l&apos;inconveniente. Si è verificato un errore inaspettato.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-charcoal text-white font-sans text-sm uppercase tracking-widest hover:bg-sepia transition-colors duration-300"
          >
            Riprova
          </button>
          
          <Link
            href="/"
            className="px-8 py-3 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            Torna alla Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-left">
            <p className="font-mono text-xs text-red-800 overflow-wrap-break-word">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
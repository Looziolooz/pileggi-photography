import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-9xl text-charcoal mb-4">404</h1>
        
        <h2 className="font-serif text-3xl text-charcoal mb-6">
          Pagina Non Trovata
        </h2>
        
        <p className="font-sans text-lg text-warmGray mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-charcoal text-white font-sans text-sm uppercase tracking-widest hover:bg-sepia transition-colors duration-300"
          >
            Torna alla Home
          </Link>
          
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            Vedi Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
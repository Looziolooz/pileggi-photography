'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-light mb-2">AP</h3>
            <p className="font-sans text-sm text-gray-400">
              Antonio Pileggi - Fotografo
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4">Seguimi</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Flickr
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="font-sans text-xs text-gray-500 text-center">
            © 2025 Antonio Pileggi. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
'use client'

import Link from 'next/link'
import { SITE_CONFIG, NAV_ITEMS, type NavItem } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="w-full bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrizione */}
          <div>
            <h3 className="font-serif text-2xl font-light mb-2">AP</h3>
            <p className="font-sans text-sm text-gray-400">
              {SITE_CONFIG.author} - Fotografo
            </p>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Fotografia d&apos;autore per matrimoni, ritratti ed eventi
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4">
              Menu
            </h4>
            <nav aria-label="Menu footer">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item: NavItem) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="font-sans text-sm text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social e Contatti */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4">
              Seguimi
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              {SITE_CONFIG.social.instagram && (
                <a 
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                  aria-label="Seguimi su Instagram (si apre in una nuova finestra)"
                >
                  Instagram
                </a>
              )}
              {SITE_CONFIG.social.facebook && (
                <a 
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                  aria-label="Seguimi su Facebook (si apre in una nuova finestra)"
                >
                  Facebook
                </a>
              )}
              {SITE_CONFIG.social.flickr && (
                <a 
                  href={SITE_CONFIG.social.flickr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                  aria-label="Seguimi su Flickr (si apre in una nuova finestra)"
                >
                  Flickr
                </a>
              )}
            </div>

            {/* Contatti */}
            <div className="space-y-2">
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="block font-sans text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                aria-label="Inviami una email"
              >
                {SITE_CONFIG.email}
              </a>
              <a 
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="block font-sans text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                aria-label="Chiamami"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="font-sans text-xs text-gray-500 text-center">
            © {currentYear} {SITE_CONFIG.author}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
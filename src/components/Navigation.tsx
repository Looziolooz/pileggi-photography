'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NAV_ITEMS, type NavItem } from '@/lib/constants'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Chiudi menu quando si preme Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Navigazione principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-light text-charcoal hover:text-sepia transition-colors focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2 rounded"
          aria-label="Antonio Pileggi - Torna alla home"
        >
          AP
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item: NavItem) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm uppercase tracking-widest text-charcoal hover:text-sepia transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2 rounded"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Language Switcher Desktop */}
          <div className="ml-4 border-l border-gray-200 pl-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-charcoal p-2 focus:outline-none focus:ring-2 focus:ring-sepia rounded"
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          role="menu"
        >
          {NAV_ITEMS.map((item: NavItem) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 font-sans text-sm uppercase tracking-widest text-charcoal hover:bg-cream transition-colors focus:outline-none focus:bg-cream focus:ring-2 focus:ring-inset focus:ring-sepia"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Language Switcher Mobile */}
          <div className="px-4 py-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs font-sans uppercase tracking-widest text-warmGray">Lingua</span>
            <LanguageSwitcher />
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
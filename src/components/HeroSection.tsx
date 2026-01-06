'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  imageUrl: string
  cta?: {
    text: string
    href: string
  }
}

export function HeroSection({
  title,
  subtitle,
  imageUrl,
  cta = { text: 'Scopri il Portfolio', href: '/portfolio' },
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-cream">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="font-serif text-5xl sm:text-7xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="font-sans text-lg sm:text-xl text-gray-200 mb-8 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href={cta.href}
              className="inline-block px-8 py-3 border border-white text-white font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              {cta.text}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
import { GalleryGrid } from '@/components/GalleryGrid'
import { GALLERY_IMAGES } from '@/lib/images'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Antonio Pileggi',
  description: 'Galleria completa di matrimoni, ritratti, eventi e fotografia commerciale. Scopri il portfolio di Antonio Pileggi.',
  openGraph: {
    title: 'Portfolio - Antonio Pileggi Photography',
    description: 'Galleria completa dei miei lavori fotografici',
  },
}

export default function PortfolioPage() {
  return (
    <main className="w-full pt-20">
      {/* Header */}
      <section className="bg-cream py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-4">
            Portfolio
          </h1>
          <p className="font-sans text-lg text-warmGray">
            Una selezione dei miei lavori più significativi
          </p>
        </div>
      </section>

      {/* Gallery - Rimossa prop "columns" che non esiste */}
      <GalleryGrid images={GALLERY_IMAGES} />
    </main>
  )
}
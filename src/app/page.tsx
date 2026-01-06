import { HeroSection } from '@/components/HeroSection'
import { GalleryGrid } from '@/components/GalleryGrid'
import { Testimonials } from '@/components/Testimonials'
import { GALLERY_IMAGES, TESTIMONIALS } from '@/lib/images'
import Image from 'next/image'

export default function Home() {
  const featuredImages = GALLERY_IMAGES.slice(0, 6)

  return (
    <main className="w-full">
      <HeroSection
        title="Antonio Pileggi"
        subtitle="Fotografia che cattura l'essenza dei tuoi momenti più importanti"
        imageUrl="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=1200&fit=crop"
        cta={{
          text: 'Scopri il Mio Lavoro',
          href: '/portfolio',
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Portfolio Selezionato</h2>
          <div className="h-1 w-20 bg-sepia" />
        </div>
        <GalleryGrid images={featuredImages} />
      </section>

      <Testimonials testimonials={TESTIMONIALS} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mb-6">La Mia Visione</h2>
              <p className="font-sans text-lg text-warmGray mb-4 leading-relaxed">Credo che ogni momento meriti di essere catturato con bellezza e autenticità. La fotografia non è solo tecnica, è storytelling visivo che racconterà la tua storia per generazioni.</p>
              <p className="font-sans text-lg text-warmGray leading-relaxed">Specializzato in matrimoni, ritratti e eventi, porto con me 15 anni di esperienza e una passione infinita per la luce e la composizione.</p>
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Antonio Pileggi" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6">Pronto a catturare il tuo momento?</h2>
          <p className="font-sans text-lg mb-8 text-gray-300">Contattami per una consulenza gratuita e scopri come posso raccontare la tua storia.</p>
          <a href="/contact" className="inline-block px-8 py-3 border border-white text-white font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300">Iniziamo</a>
        </div>
      </section>
    </main>
  )
}
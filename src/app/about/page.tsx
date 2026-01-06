import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Sono - Antonio Pileggi',
  description: 'La storia di Antonio Pileggi, fotografo specializzato in matrimoni e ritratti',
}

export default function AboutPage() {
  return (
    <main className="w-full pt-20">
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-8">Chi Sono</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Antonio Pileggi"
                width={500}
                height={500}
                className="w-full rounded-sm"
              />
            </div>
            
            <div className="space-y-6">
              <p className="font-sans text-lg text-warmGray leading-relaxed">
                Sono Antonio Pileggi, fotografo specializzato in matrimoni, ritratti e eventi. 
                La mia passione per la fotografia nasce dall&apos;amore per la luce e la capacità di 
                catturare l&apos;essenza di un momento.
              </p>
              
              <p className="font-sans text-lg text-warmGray leading-relaxed">
                Con oltre 15 anni di esperienza nel settore, ho avuto l&apos;onore di documentare 
                centinaia di momenti speciali per le famiglie italiane. Ogni progetto è unico, 
                e mi impegno a raccontare la tua storia con autenticità e arte.
              </p>

              <p className="font-sans text-lg text-warmGray leading-relaxed">
                Credo che la fotografia non sia solo tecnica, ma un atto di amore verso chi sceglie 
                di raccontare i propri momenti con me.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white p-12 rounded-sm">
            <h2 className="font-serif text-3xl text-charcoal mb-8">Servizi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Matrimoni</h3>
                <p className="font-sans text-warmGray">
                  Fotografia d&apos;arte per il giorno più importante della tua vita.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Ritratti</h3>
                <p className="font-sans text-warmGray">
                  Ritratti studio e lifestyle che catturano la tua essenza.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Eventi</h3>
                <p className="font-sans text-warmGray">
                  Copertura di battesimi, anniversari, party e cerimonie.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Commercial</h3>
                <p className="font-sans text-warmGray">
                  Fotografia di prodotto e lifestyle per brand e aziende.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
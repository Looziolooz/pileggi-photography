"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  {
    // Ritratto Sposa
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
    alt: "Bridal Portrait",
    width: "col-span-1",
    aspect: "aspect-[3/4]"
  },
  {
    // NUOVA IMMAGINE (Table setting classico, molto stabile)
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    alt: "Wedding Table Details",
    width: "col-span-1 md:col-span-2",
    aspect: "aspect-[16/9]"
  },
  {
    // Dettaglio Mani/Anelli
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    alt: "Ceremony Moments",
    width: "col-span-1",
    aspect: "aspect-[3/4]"
  }
];

export default function FeaturedGallery() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Portfolio</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Captured Moments</h2>
        </div>
        <Link href="/portfolio" className="hidden md:block text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-all">
          View All Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative ${img.width} ${img.aspect} group overflow-hidden bg-stone-200 cursor-pointer`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              // FIX INGEGNERISTICO:
              // Disabilita l'ottimizzazione server-side per evitare timeout in locale.
              // L'immagine verrà caricata direttamente da Unsplash.
              unoptimized={true} 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
         <Link href="/portfolio" className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
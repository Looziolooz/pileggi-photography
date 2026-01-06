'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import type { GalleryImage } from '@/types'

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const { ref, isVisible } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className="group relative overflow-hidden bg-warmGray rounded-sm"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <motion.div
                className="absolute inset-0 bg-black/40 flex flex-col items-end justify-end p-6 cursor-pointer"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-white text-xl mb-2 text-right">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="font-sans text-sm text-gray-200 text-right line-clamp-2">
                    {image.description}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
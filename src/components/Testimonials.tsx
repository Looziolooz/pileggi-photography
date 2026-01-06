'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonial = testimonials[currentIndex]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Racconti di Fiducia
          </h2>
          <div className="h-1 w-20 bg-sepia mx-auto" />
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-cream p-8 sm:p-12 rounded-sm"
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array(testimonial.rating)
              .fill(0)
              .map((_, i) => (
                <motion.span
                  key={i}
                  className="text-sepia text-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
          </div>

          <p className="font-serif text-xl sm:text-2xl text-charcoal text-center mb-8 leading-relaxed italic">
            &quot;{testimonial.content}&quot;
          </p>

          <div className="text-center">
            <p className="font-sans font-semibold text-charcoal">
              {testimonial.author}
            </p>
            <p className="font-sans text-sm text-warmGray">
              {testimonial.role}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0
                  ? testimonials.length - 1
                  : currentIndex - 1
              )
            }
            className="w-12 h-12 rounded-full border border-sepia text-sepia hover:bg-sepia hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-sepia w-8' : 'bg-warmGray w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === testimonials.length - 1
                  ? 0
                  : currentIndex + 1
              )
            }
            className="w-12 h-12 rounded-full border border-sepia text-sepia hover:bg-sepia hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

export const metadata = {
  title: 'Contatti - Antonio Pileggi',
  description: 'Contatta Antonio Pileggi per prenotare una sessione fotografica',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
    category: 'matrimonio',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('Grazie! Ti contatterò al più presto.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          message: '',
          category: 'matrimonio',
        })
      } else {
        setSubmitMessage('Si è verificato un errore. Riprova.')
      }
    } catch (error) {
      setSubmitMessage('Si è verificato un errore. Riprova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="w-full pt-20">
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-4">Contatti</h1>
            <p className="font-sans text-lg text-warmGray mb-12">
              Contattami per una consulenza gratuita e parliamo della tua visione.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 sm:p-12 rounded-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Telefono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Tipo di Servizio
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              >
                <option value="matrimonio">Matrimonio</option>
                <option value="ritratti">Ritratti</option>
                <option value="corporate">Corporate/Events</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Data Evento (opzionale)
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2">
                Messaggio
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-charcoal text-white font-sans text-sm uppercase tracking-widest hover:bg-sepia transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
            </motion.button>

            {/* Success/Error Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-cream text-charcoal text-center rounded-sm"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Email</h3>
              <a href="mailto:antonio@pileggiaphoto.com" className="font-sans text-warmGray hover:text-sepia transition-colors">
                antonio@pileggiaphoto.com
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Telefono</h3>
              <a href="tel:+393331234567" className="font-sans text-warmGray hover:text-sepia transition-colors">
                +39 333 123 4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
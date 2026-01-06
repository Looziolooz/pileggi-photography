'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Schema di validazione
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve contenere almeno 2 caratteri'),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Messaggio deve contenere almeno 10 caratteri'),
  category: z.enum(['matrimonio', 'ritratti', 'corporate', 'altro']),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: 'matrimonio',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Grazie! Ti contatterò al più presto.' 
        })
        reset()
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || 'Si è verificato un errore. Riprova.' 
        })
      }
    } catch {
      // ✅ Rimossa variabile 'error' non usata
      setSubmitMessage({ 
        type: 'error', 
        text: 'Errore di connessione. Verifica la tua connessione e riprova.' 
      })
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
            <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-4">
              Contatti
            </h1>
            <p className="font-sans text-lg text-warmGray mb-12">
              Contattami per una consulenza gratuita e parliamo della tua visione.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 sm:p-12 rounded-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Nome */}
            <div>
              <label 
                htmlFor="name"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Nome *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Telefono */}
            <div>
              <label 
                htmlFor="phone"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
              />
            </div>

            {/* Categoria */}
            <div>
              <label 
                htmlFor="category"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Tipo di Servizio *
              </label>
              <select
                id="category"
                {...register('category')}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
              >
                <option value="matrimonio">Matrimonio</option>
                <option value="ritratti">Ritratti</option>
                <option value="corporate">Corporate/Eventi</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Data Evento */}
            <div>
              <label 
                htmlFor="eventDate"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Data Evento (opzionale)
              </label>
              <input
                id="eventDate"
                type="date"
                {...register('eventDate')}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
              />
            </div>

            {/* Messaggio */}
            <div>
              <label 
                htmlFor="message"
                className="block font-sans text-sm uppercase tracking-widest text-charcoal mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={5}
                className="w-full px-4 py-3 border border-warmGray rounded-sm focus:outline-none focus:border-sepia focus:ring-2 focus:ring-sepia"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-8 py-3 bg-charcoal text-white font-sans text-sm uppercase tracking-widest hover:bg-sepia transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
            </motion.button>

            {/* Success/Error Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-sm text-center ${
                  submitMessage.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
                role="alert"
              >
                {submitMessage.text}
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
              <a 
                href="mailto:antonio@antoniopileggi.com" 
                className="font-sans text-warmGray hover:text-sepia transition-colors focus:outline-none focus:underline"
              >
                antonio@antoniopileggi.com
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Telefono</h3>
              <a 
                href="tel:+393331234567" 
                className="font-sans text-warmGray hover:text-sepia transition-colors focus:outline-none focus:underline"
              >
                +39 333 123 4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
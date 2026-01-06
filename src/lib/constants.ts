// ==========================================
// CONFIGURAZIONE DEL SITO
// ==========================================

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Antonio Pileggi Photography',
  description: 'Fotografia di matrimoni, ritratti e eventi con stile minimalista e vintage',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.antoniopileggi.com',
  author: 'Antonio Pileggi',
  email: process.env.CONTACT_EMAIL || 'antonio@antoniopileggi.com',
  phone: process.env.CONTACT_PHONE || '+39 333 123 4567',
  locale: 'it_IT',
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/antoniopileggi',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/antoniopileggiphoto',
    flickr: process.env.NEXT_PUBLIC_FLICKR_URL || 'https://flickr.com/photos/antoniopileggi',
  },
} as const

// ==========================================
// NAVIGAZIONE
// ==========================================

export const NAV_ITEMS = [
  { 
    label: 'Portfolio', 
    href: '/portfolio',
    description: 'Guarda i miei lavori' 
  },
  { 
    label: 'Chi Sono', 
    href: '/about',
    description: 'Scopri la mia storia' 
  },
  { 
    label: 'Contatti', 
    href: '/contact',
    description: 'Parliamo del tuo progetto' 
  },
] as const

// Type per NAV_ITEMS
export type NavItem = typeof NAV_ITEMS[number]

// ==========================================
// CATEGORIE GALLERIA
// ==========================================

export const GALLERY_CATEGORIES = [
  { value: 'matrimoni', label: 'Matrimoni' },
  { value: 'ritratti', label: 'Ritratti' },
  { value: 'events', label: 'Eventi' },
  { value: 'commercial', label: 'Commercial' },
] as const

// ==========================================
// CATEGORIE FORM CONTATTI
// ==========================================

export const CONTACT_CATEGORIES = [
  { value: 'matrimonio', label: 'Matrimonio' },
  { value: 'ritratti', label: 'Ritratti' },
  { value: 'corporate', label: 'Corporate/Eventi' },
  { value: 'altro', label: 'Altro' },
] as const

// ==========================================
// SERVIZI OFFERTI
// ==========================================

export const SERVICES = [
  {
    id: 'matrimoni',
    title: 'Matrimoni',
    description: "Fotografia d'arte per il giorno più importante della tua vita.",
    features: [
      'Servizio completo giorno del matrimonio',
      'Pre-wedding photoshoot',
      'Album fotografico premium',
      'Editing professionale',
    ],
  },
  {
    id: 'ritratti',
    title: 'Ritratti',
    description: 'Ritratti studio e lifestyle che catturano la tua essenza.',
    features: [
      'Ritratti professionali',
      'Family sessions',
      'Corporate headshots',
      'Lifestyle photography',
    ],
  },
  {
    id: 'eventi',
    title: 'Eventi',
    description: 'Copertura di battesimi, anniversari, party e cerimonie.',
    features: [
      'Battesimi e comunioni',
      'Eventi aziendali',
      'Feste private',
      'Anniversari',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Fotografia di prodotto e lifestyle per brand e aziende.',
    features: [
      'Product photography',
      'Fashion photography',
      'Food photography',
      'Brand storytelling',
    ],
  },
] as const

// ==========================================
// REGEX PATTERNS PER VALIDAZIONE
// ==========================================

export const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s+()-]+$/,
  name: /^[a-zA-ZÀ-ÿ\s'-]{2,}$/,
} as const

// ==========================================
// MESSAGGI DI ERRORE
// ==========================================

export const ERROR_MESSAGES = {
  required: 'Questo campo è obbligatorio',
  invalidEmail: 'Inserisci un indirizzo email valido',
  invalidPhone: 'Inserisci un numero di telefono valido',
  minLength: (min: number) => `Minimo ${min} caratteri richiesti`,
  maxLength: (max: number) => `Massimo ${max} caratteri consentiti`,
  genericError: 'Si è verificato un errore. Riprova più tardi.',
} as const

// ==========================================
// MESSAGGI DI SUCCESSO
// ==========================================

export const SUCCESS_MESSAGES = {
  contactFormSubmitted: 'Grazie per il tuo messaggio! Ti contatterò al più presto.',
  newsletterSubscribed: 'Iscrizione completata con successo!',
} as const
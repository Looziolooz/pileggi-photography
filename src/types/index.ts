export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'matrimoni' | 'ritratti' | 'events' | 'commercial'
  title: string
  description?: string
  aspectRatio: number
}

export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  price?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  eventDate?: string
  message: string
  category: 'matrimonio' | 'ritratti' | 'corporate' | 'altro'
}
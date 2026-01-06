import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti - Antonio Pileggi',
  description: 'Contatta Antonio Pileggi per prenotare una sessione fotografica. Disponibile per matrimoni, ritratti ed eventi in tutta Italia.',
  openGraph: {
    title: 'Contatti - Antonio Pileggi Photography',
    description: 'Contatta Antonio Pileggi per prenotare una sessione fotografica.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
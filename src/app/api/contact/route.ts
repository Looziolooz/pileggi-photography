import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Schema di validazione con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve contenere almeno 2 caratteri'),
  email: z.string().email('Indirizzo email non valido'),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Messaggio deve contenere almeno 10 caratteri'),
  category: z.enum(['matrimonio', 'ritratti', 'corporate', 'altro']),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validazione dati
    const validatedData = contactSchema.parse(body)
    
    // TODO: Inviare email con servizio email (Resend, SendGrid, etc.)
    // Esempio con Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Antonio Pileggi <noreply@antoniopileggi.com>',
    //   to: [process.env.CONTACT_EMAIL || 'antonio@antoniopileggi.com'],
    //   subject: `Nuova richiesta: ${validatedData.category}`,
    //   html: `
    //     <h2>Nuova richiesta di contatto</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Telefono:</strong> ${validatedData.phone || 'Non fornito'}</p>
    //     <p><strong>Categoria:</strong> ${validatedData.category}</p>
    //     <p><strong>Data Evento:</strong> ${validatedData.eventDate || 'Non specificata'}</p>
    //     <p><strong>Messaggio:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // })
    
    // Per ora, log dei dati
    console.log('Nuovo contatto ricevuto:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // Risposta di successo
    return NextResponse.json(
      { 
        success: true,
        message: 'Messaggio ricevuto con successo. Ti contatteremo al più presto!' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    // Gestione errori di validazione
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Dati non validi',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }
    
    // Errori generici
    console.error('Errore API contact:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.' 
      },
      { status: 500 }
    )
  }
}

// Gestione metodo non consentito
export async function GET() {
  return NextResponse.json(
    { error: 'Metodo non consentito' },
    { status: 405 }
  )
}
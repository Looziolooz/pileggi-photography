import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Qui puoi aggiungere logica per salvare il messaggio
    // Per ora, semplicemente lo loghiamo
    console.log('Nuovo contatto:', body)

    // Risposta di successo
    return NextResponse.json(
      { message: 'Messaggio ricevuto' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore:', error)
    return NextResponse.json(
      { error: 'Errore nel salvataggio del messaggio' },
      { status: 500 }
    )
  }
}
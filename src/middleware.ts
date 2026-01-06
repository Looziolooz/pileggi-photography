import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Le lingue supportate (abbiamo rimosso lo svedese 'sv')
  locales: ['it', 'en'],
 
  // Se l'utente entra senza lingua, usa questa di default
  defaultLocale: 'it'
});
 
export const config = {
  // Intercetta tutte le richieste eccetto i file statici, api, ecc.
  matcher: ['/', '/(it|en)/:path*']
};
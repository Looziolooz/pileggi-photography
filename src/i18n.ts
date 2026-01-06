import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Locali supportati
const locales = ['it', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // Validazione: se la lingua non è supportata, restituisce 404
  if (!locales.includes(locale as string)) notFound();

  // Mappa degli import statici: questo elimina l'errore di build dinamico
  const messagesMap = {
    it: () => import('../messages/it.json').then((module) => module.default),
    en: () => import('../messages/en.json').then((module) => module.default),
  };

  // Recupera la funzione di import corretta
  const getMessages = messagesMap[locale as keyof typeof messagesMap];

  return {
    locale: locale as string,
    messages: await getMessages() // Carica il JSON specifico
  };
});
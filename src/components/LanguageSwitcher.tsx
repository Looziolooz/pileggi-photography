'use client'

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { startTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    // Sostituisce il locale corrente solo all'inizio del path
    const newPath = pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
    
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex gap-2 text-xs font-sans uppercase tracking-tighter items-center">
      {/* ✅ Rimosso 'sv', solo 'it' e 'en' */}
      {['it', 'en'].map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          aria-label={lang === 'it' ? 'Italiano' : 'English'}
          className={`
            transition-all duration-300 
            ${locale === lang 
              ? 'font-bold text-charcoal underline underline-offset-4 decoration-sepia' 
              : 'text-warmGray hover:text-sepia'
            }
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
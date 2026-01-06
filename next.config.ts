import withNextIntl from 'next-intl/plugin';
import type { NextConfig } from 'next';

/**
 * Configurazione per next-intl.
 * Carica le impostazioni da src/i18n.ts per gestire le traduzioni
 * di Italiano, Inglese e Svedese.
 */
const withNextIntlConfig = withNextIntl('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Configurazione immagini remote
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Ottimizzazioni generali
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Headers di sicurezza
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

// Esporta la configurazione avvolta dal plugin i18n
export default withNextIntlConfig(nextConfig);
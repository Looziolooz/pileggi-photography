import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // ✅ Rimosso 'sv'
  locales: ['en', 'it'],
  defaultLocale: 'it'
});
 
export const config = {
  // ✅ Rimosso 'sv' dal matcher
  matcher: ['/', '/(it|en)/:path*']
};
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr'], // Make sure these match `routing.js`
  defaultLocale: 'en'
});

// Ensure Middleware runs on every request
export const config = {
  matcher: ['/', '/(en|fr)/:path*']
};

